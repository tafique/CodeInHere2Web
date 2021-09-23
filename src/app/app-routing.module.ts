import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiledpComponent } from './profiledp/profiledp.component';
import { ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: 'About Us',
    component:ProfiledpComponent
  },
  {
    path: 'Contact Us',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
