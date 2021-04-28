import { NgModule } from '@angular/core';
import { RouterModule, Routes , ExtraOptions } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const appRoutes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  { path: 'home', component: AppComponent }
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes,routerOptions)],
    exports: [RouterModule]
})

export class AppRountingModule {}
