import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core'
import { ShareRecord } from '@app/core/services/cost-data/cost-data-share-record.interface'
import { CostDataService } from '@app/core/services/cost-data/cost-data.service'
import { MonoTypeOperatorFunction } from 'rxjs'
import { takeWhile } from 'rxjs/operators'
import { ShareCostBuilder } from '../share-cost-calculation-engine/share-cost-builder'
import {
  RemainingShareCostPriceVisitor,
  RemaininSharesVisitor,
  ShareCostVisitor,
  ShareGainLossVisitor,
} from '../share-cost-calculation-engine/share-cost-visitor.class'
import { ShareCostTypes } from '../share-cost-calculation-engine/share-cost.enum'

@Component({
  selector: 'app-share-cost-display',
  templateUrl: './share-cost-display.component.html',
  styleUrls: ['./share-cost-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareCostDisplayComponent implements OnChanges, OnDestroy {
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

  private _isComponentActive = true
  private _shareRecords: ReadonlyArray<ShareRecord> | undefined

  constructor(private costDataService: CostDataService) {
    this.costDataService
      .get()
      .pipe(this._handleUnsubscribe())
      .subscribe(shareRecords => (this._shareRecords = shareRecords))
  }

  ngOnDestroy(): void {
    this._isComponentActive = false
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line:no-if-statement
    if (this.valid && this._shareRecords) {
      const shareCost = ShareCostBuilder.build(this.sharesSold, this.sharePrice, this.sellDate, this.costMethod)

      this.costPrice = shareCost.accept(new ShareCostVisitor(this._shareRecords))
      this.gainLoss = shareCost.accept(new ShareGainLossVisitor(this._shareRecords))
      this.remainingShares = shareCost.accept(new RemaininSharesVisitor(this._shareRecords))
      this.remainingSharesCostPrice = shareCost.accept(new RemainingShareCostPriceVisitor(this._shareRecords))
    }
  }

  private _handleUnsubscribe<T>(): MonoTypeOperatorFunction<T> {
    return takeWhile<T>(() => this._isComponentActive)
  }
}
