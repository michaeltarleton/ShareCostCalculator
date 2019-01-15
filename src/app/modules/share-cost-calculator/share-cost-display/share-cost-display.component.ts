import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-share-cost-display',
  templateUrl: './share-cost-display.component.html',
  styleUrls: ['./share-cost-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareCostDisplayComponent {
  @Input()
  sharesSold = 0
  @Input()
  sharePrice = 0
  @Input()
  sellDate: Date | string = ''
  @Input()
  costMethod = ''

  constructor() {}
}
