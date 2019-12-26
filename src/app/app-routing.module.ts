import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { TranslationComponent } from './components/translation/translation.component';
import { CreateComponent } from './components/create/create.component';
import { ManagementComponent } from './components/management/management.component';
import { OverviewComponent } from './components/overview/overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewDetailComponent } from './components/overview/overview-detail/overview-detail.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'overview',component:OverviewComponent},
  {path: 'overview/detail/:id' , component: OverviewDetailComponent},
  {path:'management',component:ManagementComponent},
  {path:'create',component:CreateComponent},
  {path:'translation',component:TranslationComponent},
  {path:'history',component:HistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
