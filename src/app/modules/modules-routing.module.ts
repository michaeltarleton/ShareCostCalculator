import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: './share-cost-calculator/share-cost-calculator.module#ShareCostCalculatorModule',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
