import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '@app/shared/shared.module'
import { ShareCostCalculatorRoutingModule } from './share-cost-calculator-routing.module'
import { ShareCostCalculatorComponent } from './share-cost-calculator.component'

@NgModule({
  imports: [SharedModule, ShareCostCalculatorRoutingModule, ReactiveFormsModule],
  declarations: [ShareCostCalculatorComponent],
})
export class ShareCostCalculatorModule {}
