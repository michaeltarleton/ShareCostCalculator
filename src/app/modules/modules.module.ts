import { NgModule } from '@angular/core'

import { SharedModule } from '@app/shared/shared.module';
import { ShareCostCalculatorModule } from './share-cost-calculator/share-cost-calculator.module'

@NgModule({
  imports: [SharedModule, ShareCostCalculatorModule],
  declarations: [],
  exports: [],
})
export class ModulesModule {}
