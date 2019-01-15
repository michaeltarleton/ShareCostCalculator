import { NgModule } from '@angular/core'

import { SharedModule } from '@app/shared/shared.module'
import { ModulesRoutingModule } from './modules-routing.module'
import { ShareCostCalculatorModule } from './share-cost-calculator/share-cost-calculator.module'

@NgModule({
  imports: [ModulesRoutingModule, SharedModule, ShareCostCalculatorModule],
  declarations: [],
  exports: [],
})
export class ModulesModule {}
