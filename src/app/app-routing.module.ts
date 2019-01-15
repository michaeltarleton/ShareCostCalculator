import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'friends',
    loadChildren: './modules/friend-list-dashboard/friend-list-dashboard.module#FriendListDashboardModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'friends',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
