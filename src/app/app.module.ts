import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { ModalComponent } from './modals/modal/modal.component';
import { HealtyfoodComponent } from './projects/healtyfood/healtyfood.component';
import { PaintingGalleryComponent } from './projects/painting-gallery/painting-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ProjectsComponent,
    ContactComponent,
    ModalComponent,
    HealtyfoodComponent,
    PaintingGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
