import { Injectable } from "@angular/core";

declare let toastr;
@Injectable()
export class ToasterService{
    success(message: string,title?: string){
        toastr.success(message,title);
        
    }

    error(message: string,title?: string){
        toastr.error(message,title);
        
    }

    warning(message: string,title?: string){
        toastr.warning(message,title);
        
    }

}