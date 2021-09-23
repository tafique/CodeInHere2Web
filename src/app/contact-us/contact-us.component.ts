import { Component, ViewEncapsulation} from '@angular/core';
import { MessageService,ConfirmationService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  providers: [MessageService,ConfirmationService],
  styleUrls: ['./contact-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent {

  msgs1: any
  displayContactForm: boolean = false;
  uploadedFiles: any[] = [];

  constructor(private confirmationService: ConfirmationService , private messageService: MessageService , private http: HttpClient) {}

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message : new FormControl('', [Validators.required])
  });
 
  contactUs_by_Mail() {
    this.displayContactForm = true;
  }

  sendMail(event: Event) {
    this.confirmationService.confirm({
      message: 'Check all the form data once again before submission..!!',
      accept: () => {
        event.preventDefault();

        let data = {
          service_id: 'service_fwp3uja',
          template_id: 'template_4dwjpjg',
          user_id: 'user_xfilrCnJHhBbDn98VJwNW',
          template_params: {
            name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            message: this.contactForm.value.message,
          }
        };
    
        this.http.post('https://api.emailjs.com/api/v1.0/email/send', data, { responseType: 'text' })
          .subscribe((result) => {
              this.msgs1 = [
                {severity:'success', summary:'Success', detail:'Your Response has been submitted'}
            ];
          }, (error: HttpErrorResponse) => {
            this.msgs1 = [
              {severity:'error', summary:'Error', detail:`${error.message}`}
          ];
          }
        );
      }
  });

  }

  getErrorMessage() {
    if (this.contactForm.value.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.contactForm.value.email.hasError('email') ? 'Not a valid email' : '';
  }


  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }
}


