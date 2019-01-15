import { NgModule } from '@angular/core'
import { SharedModule } from '@app/shared/shared.module'
import { ShareCostCalculatorRoutingModule } from './share-cost-calculator-routing.module'
import { ShareCostCalculatorComponent } from './share-cost-calculator.component'

@NgModule({
  imports: [SharedModule, ShareCostCalculatorRoutingModule],
  declarations: [ShareCostCalculatorComponent],
})
export class ShareCostCalculatorModule {}
