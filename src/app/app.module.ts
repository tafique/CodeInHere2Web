import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfiledpComponent } from './profiledp/profiledp.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SidebarModule} from 'primeng/sidebar';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MessagesModule} from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    ProfiledpComponent,
    ContactUsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    DialogModule,
    ButtonModule,
    TabViewModule,
    MDBBootstrapModule.forRoot(),
    SidebarModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    MatFormFieldModule,
    MatInputModule,
    ConfirmDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
