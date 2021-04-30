import { NgModule } from '@angular/core';
import { RouterModule, Routes , ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const appRoutes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full'}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes,routerOptions)],
    exports: [RouterModule]
})

export class AppRountingModule {}
