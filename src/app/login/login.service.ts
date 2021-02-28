import { Injectable } from "@angular/core";
import { Toast } from "ngx-toastr";
import { ToasterService } from "../toaster.service";
import { userLogin } from "./users.module";

@Injectable()
export class loginService
{
    constructor( private msg: ToasterService){}

    getByInfoId(id: string){
        return USERS.find(c => c.Correo === id);
    }

    getByInfoVerificacion(id: string,pass: string){
        return USERS.find(c => c.Correo === id && c.password ===pass);
    }    
    addUsers(data:userLogin ){
        if(!this.getByInfoId(data.Correo) && !(data.Correo === null) &&  !(data.password === null) ){
            USERS.push(data)
            console.log(USERS)
            this.msg.success("Usuario " +data.Correo + " Creado")
        }else if((data.Correo === null) && (data.password ===null)){

            this.msg.success("Llene los Campos por favor")
        }
        else{
            this.msg.success("Usuario "+data.Correo +" ya exite o un campo esta vacio" )
        }
    }
    getadmin(user:userLogin):boolean{
        return user.isadmin
    }

    getadmin2(){
        return isAdmin
    }

    setAdmin(user:userLogin){
         isAdmin = user.isadmin
    }
    getLogged(){
        return isNormalLogged
    }

    setLogged(){
        isNormalLogged = !isNormalLogged
    }

}
let isAdmin: boolean =false
let isNormalLogged: boolean = false
const USERS:userLogin[] = [{

    Correo : "admin",
    password :"admin",
    isadmin: true
    
},{
    Correo : "lol",
    password :"lol",
    isadmin: false   
}
]