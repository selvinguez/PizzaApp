import { style } from "@angular/animations"
import { Component } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { ClaseService } from "../shared/clase.service"

@Component({
  
    templateUrl: './crearProducto.components.html',
    styles: [`
    .pad-left{
        margin-left: 20px;
    }
    
`]
})
export class CrearProductoComponent
{
   

    title: FormControl
    description : FormControl
    price : FormControl
    imageURL :FormControl
    category : FormControl
    profileForm: FormGroup
    isDirty: boolean = true;

    constructor(private claseService: ClaseService,
      private route: ActivatedRoute, private router: Router) {
        this.title = new FormControl("", [
          Validators.required, 
       
        ])
        this.description = new FormControl( "",[
          Validators.required, 
       
        ])
        this.price = new FormControl( [
          Validators.required, 
       
        ])
        this.imageURL = new FormControl("", [
          Validators.required, 
       
        ])
        this.category = new FormControl("" ,[
          Validators.required, 
       
        ])
        this.profileForm = new FormGroup({
          title: this.title,
          description: this.description,
          price: this.price,
          imageURL: this.imageURL,
          category: this.category
          
      })
      
    }
    

    fnProduct(data){
      data.id = this.claseService.getCountid()
      this.claseService.addProducto(data);
      this.isDirty = false;
      console.log(data)
    }

    cancel(){
      this.router.navigateByUrl('');
  }
  
  regresar(){
    this.router.navigateByUrl('');
}
}