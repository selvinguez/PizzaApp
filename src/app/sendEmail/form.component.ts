import { Component } from "@angular/core"
import { FormControl, FormGroup } from "@angular/forms"
import { EmailService } from '../email.service';

@Component({
  
    templateUrl: './form.component.html',
    styles: [`
    .pad-left{
        margin-left: 20px;
    }
    
`]

})
export class EmailFormComponent
{
    emailForm: FormGroup
    name:FormControl
    email: FormControl
    message : FormControl

    constructor(private _emailService: EmailService) {
      this.name = new FormControl("")
      this.email = new FormControl( "",)
      this.message = new FormControl("")
      this.emailForm = new FormGroup({
        name: this.name,
        email: this.email,
        message: this.message,
      }) 
        
    }

    fnSubmit(form) {
      const {name, email, message} = form;
    
      this._emailService.sendEmail({
        from: 'Mailgun Sandbox <postmaster@sandbox1b11d62db6f0460288aa213b4212562a.mailgun.org>',
        to: email,
        name: name,
        text: message,
      })
      .subscribe(
        () => {},
        err => console.log(err)
      );
    } 

}