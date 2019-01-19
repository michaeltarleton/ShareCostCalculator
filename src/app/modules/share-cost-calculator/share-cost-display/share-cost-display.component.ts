import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import {
  RemainingShareCostPriceVisitor,
  RemaininSharesVisitor,
  ShareCostBuilder,
  ShareCostTypes,
  ShareCostVisitor,
  ShareGainLossVisitor,
} from '../share-cost-calculation-engine/share-cost.interface'

@Component({
  selector: 'app-share-cost-display',
  templateUrl: './share-cost-display.component.html',
  styleUrls: ['./share-cost-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareCostDisplayComponent implements OnChanges {
  @Input()
  sharesSold = 0
  @Input()
  sharePrice = 0
  @Input()
  sellDate: Date | string = ''
  @Input()
  costMethod: ShareCostTypes = ShareCostTypes.FIFO
  @Input()
  valid = false

  costPrice: number | undefined
  gainLoss: number | undefined
  remainingShares: number | undefined
  remainingSharesCostPrice: number | undefined

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line:no-if-statement
    if (this.valid) {
      const shareCost = ShareCostBuilder.build(this.sharesSold, this.sharePrice, this.sellDate, this.costMethod)

      this.costPrice = shareCost.accept(new ShareCostVisitor())
      this.gainLoss = shareCost.accept(new ShareGainLossVisitor())
      this.remainingShares = shareCost.accept(new RemaininSharesVisitor())
      this.remainingSharesCostPrice = shareCost.accept(new RemainingShareCostPriceVisitor())
    }
  }
}
