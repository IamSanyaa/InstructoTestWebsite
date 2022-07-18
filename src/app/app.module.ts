import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AuthService } from './shared/auth.service';

import { HttpClientModule } from '@angular/common/http';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InstructorComponent } from './instructor/instructor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LfInstructorComponent } from './lf-instructor/lf-instructor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyCBlIESxKDwZO9nhCHiGxRj3gzJnLPUFTA',
  authDomain: 'fir-app1711.firebaseapp.com',
  databaseURL: 'https://fir-app1711.firebaseio.com',
  projectId: 'fir-app1711',
  storageBucket: 'fir-app1711.appspot.com',
  messagingSenderId: '989506790988',
  appId: '1:989506790988:web:d01b0a166cdd74ca1ab6e9'
};


@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent,
    NotFoundComponent,
    HomeComponent,
    LfInstructorComponent,
    NavbarComponent,
    RegisterComponent,
    FooterComponent,
    GalleryComponent,
    AboutusComponent,
    ContactusComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [FlexLayoutModule],
    [MatButtonModule],
    [MatCardModule],
    [MatChipsModule],
    [MatFormFieldModule],
    [MatIconModule],
    [MatInputModule],
    [MatToolbarModule],
    [MatTabsModule],
    [MatRadioModule],
    [MatSlideToggleModule],
    [MatGridListModule],
    [MatProgressBarModule],
    [DragDropModule],
    [MatTableModule],
    [HttpClientModule],
    [AgmCoreModule.forRoot({
      apiKey:'AIzaSyBRYiNjt0aovbUhBAddjxNhIuVFDPUAa2U'
    })],
    [AngularFireModule.initializeApp(firebaseConfig)], //firebase
    [AngularFireStorageModule],
    [AngularFireDatabaseModule],
    [AngularFireAuthModule]
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
