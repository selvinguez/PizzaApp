import { Component } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"

import { ClaseService } from "../shared/clase.service"

@Component({
  
    templateUrl: './editarProducto.components.html',
    styles: [`
    .pad-left{
        margin-left: 20px;
    }
    
`]

})
export class EditarProductoComponent
{
   
    product:any
    isEnabled:FormControl
    title: FormControl
    description : FormControl
    price : FormControl
    imageURL :FormControl
    category : FormControl
    profileForm2: FormGroup
    isDirty: boolean = true;

    constructor(private claseService: ClaseService,
      private route: ActivatedRoute, private router: Router) {
        this.product = this.route.snapshot.data['productos']
      
        this.title = new FormControl(this.product.title, [
          Validators.required, 
       
        ])
        this.description = new FormControl(this.product.description ,[
          Validators.required, 
       
        ])
        this.price = new FormControl(this.product.price, [
          Validators.required, 
       
        ])
        this.imageURL = new FormControl(this.product.imageURL, [
          Validators.required, 
       
        ])
        this.category = new FormControl(this.product.category ,[
          Validators.required, 
       
        ])
        this.isEnabled = new FormControl(this.product.isEnabled,[])
        this.profileForm2 = new FormGroup({
          title: this.title,
          description: this.description,
          price: this.price,
          imageURL: this.imageURL,
          category: this.category,
          isEnabled :this.isEnabled
      })
    }
    ngOnInit(){
      
    this.product = this.route.snapshot.data['productos']
      
    console.log(this.product)
      
    }

    fnProduct(data){
      this.product.title = data.title
      this.product.description = data.description
      this.product.price = data.price
      this.product.imageURL = data.imageURL
      this.product.category = data.category
      this.product.isEnabled = data.isEnabled
      this.claseService.editProducto(this.product).subscribe();
      this.isDirty = false;
    }

    cancel(){
      this.router.navigateByUrl('lista');
  }
  
  regresar(){
    this.router.navigateByUrl('lista');
}
}