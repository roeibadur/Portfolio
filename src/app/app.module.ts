import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRountingModule } from './app-rounting.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EducationComponent } from './education/education.component';
import { CareerComponent } from './career/career.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project-list/project/project.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EducationComponent,
    CareerComponent,
    AboutMeComponent,
    ProjectListComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
