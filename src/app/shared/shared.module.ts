import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AngularMaterialModule } from './angular-material/angular-material.module'

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  exports: [CommonModule, AngularMaterialModule],
  declarations: [],
})
export class SharedModule {}
