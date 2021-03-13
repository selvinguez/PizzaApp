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
   
    isEnabled:FormControl
    title: FormControl
    description : FormControl
    price : FormControl
    imageURL :FormControl
    category : FormControl
    profileForm: FormGroup
    isDirty: boolean = true;
    count:number

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
        this.isEnabled = new FormControl()
        this.profileForm = new FormGroup({
          title: this.title,
          description: this.description,
          price: this.price,
          imageURL: this.imageURL,
          category: this.category,
          
          isEnabled: this.isEnabled
      }) 
      
      this.claseService.getProductos().subscribe(data =>
        this.count = data.length)
    }

      
    
    

    fnProduct(data){
      data.id = this.count;
      this.count = this.count +1
      this.claseService.addProducto(data).subscribe(()=> {

     })  
      this.isDirty = false;

    }
  

    cancel(){
      this.router.navigateByUrl('');
  }
  
  regresar(){
    this.router.navigateByUrl('');
}
}