import { NgModule } from '@angular/core'
import {} from '@angular/material'

import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { NavbarModule } from './navbar/navbar.module'

@NgModule({
  imports: [SharedModule, RouterModule, NavbarModule],
  exports: [SharedModule, NavbarModule],
  declarations: [],
})
export class CoreModule {}
