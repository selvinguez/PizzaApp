import { stringify } from "@angular/compiler/src/util";
import { Component } from "@angular/core"
import { FormControl, FormGroup } from "@angular/forms"
import { EmailService } from '../email.service';
import { ClaseService } from "../shared/clase.service";
declare let toastr;
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
    direccion: FormControl
    telefono: FormControl
    message : FormControl

    constructor(private _emailService: EmailService, private producto:ClaseService) {
      

      this.name = new FormControl("")
      this.direccion = new FormControl( "")
      this.telefono = new FormControl("")
      this.message = new FormControl("")

      this.emailForm = new FormGroup({
        name: this.name,
        telefono: this.telefono,
        message: this.message ,
        direccion:this.direccion
      }) 
        
    }

    fnSubmit(form) {
      const {name, message,telefono,direccion} = form;
      
      this._emailService.sendEmail2({
        subject: name,
        text: "orden: "+JSON.stringify(this.producto.getCart())+"\nmesaje del cliente: "+message
        +"\nTelefono: "+telefono+"\n Direccion: "+direccion,
      })
      .subscribe(
        () => {},
        err => console.log(err)
      );
      this.producto.emptyCART()
      toastr.success(`Orden Enviada`);
    } 
    
}