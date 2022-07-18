import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorComponent } from './instructor/instructor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LfInstructorComponent } from './lf-instructor/lf-instructor.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UploaderComponent } from './uploader/uploader.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'instructor', component: InstructorComponent},
  { path: 'clientlist', component: LfInstructorComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'uploader', component: UploaderComponent },
  { path: '**', component: NotFoundComponent }
  /* {path: '', redirectTo:'home', pathMatch:'full' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
