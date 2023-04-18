import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { ModalComponent } from "./modals/modal/modal.component";
import { HealtyfoodComponent } from "./projects/healtyfood/healtyfood.component";
import { PaintingGalleryComponent } from "./projects/painting-gallery/painting-gallery.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent },
  {path: 'projects', component: ProjectsComponent, children:[
    {path: 'healtyfood', component: HealtyfoodComponent},
    {path: 'painting-gallery', component: PaintingGalleryComponent}
  ]},
  {path: 'contact', component: ContactComponent}
]

 @NgModule ({
     imports: [
         RouterModule.forRoot(appRoutes)
     ],
     exports: [
         RouterModule
     ]

 })

 export class AppRoutingModule {

 }
