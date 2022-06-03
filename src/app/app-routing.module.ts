import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './Pages/activities/activities.component';
import { AwardsComponent } from './Pages/awards/awards.component';
import { HomeComponent } from './Pages/home/home.component';
import { ResumeComponent } from './Pages/resume/resume.component';
import { WorkComponent } from './Pages/work/work.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
