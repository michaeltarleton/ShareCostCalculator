import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ShareCostCalculatorComponent } from './share-cost-calculator.component'

const routes: Routes = [
  {
    path: '',
    component: ShareCostCalculatorComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ShareCostCalculatorRoutingModule {}
