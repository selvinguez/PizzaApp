import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Toast } from "ngx-toastr";
import { ToasterService } from "../toaster.service";
import { userLogin } from "./users.module";
import { Observable, Subject } from "rxjs";



@Injectable()
export class loginService
{
    constructor( private msg: ToasterService,private http: HttpClient){
        if(USERS.length===0){
            this.getInfo().subscribe(data =>
                data.forEach(lol=>USERS.push(lol)))
        }

    }
  
    getInfo(): Observable< userLogin[]>{
        return this.http.get< userLogin[]>('http://localhost:3000/usuarios');
    }
    getByInfoId(id: string){
       
        return USERS.find(c => c.Correo === id);
    }

    getByInfoVerificacion(id: string,pass: string){
     
        return USERS.find(c => String(c.Correo) === String(id) && String(c.password) === String(pass));
    }    
    
    addUsers(data:userLogin ){
        data.isadmin = 0;
        let options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
        if(!this.getByInfoId(data.Correo) && !(data.Correo === null) &&  !(data.password === null) ){
            USERS.push(data);
            this.msg.success("Usuario " +data.Correo + " Creado")
            return this.http.post('http://localhost:3000/usuarios', data, options)
        }else if((data.Correo === null) && (data.password ===null)){

            this.msg.success("Llene los Campos por favor")
        }
        else{
            this.msg.success("Usuario "+data.Correo +" ya exite o un campo esta vacio" )
        }
        return this.http.get('http://localhost:3000/usuarios')
    }

    getadmin(user:userLogin):boolean{
        if(user.isadmin){
            return true;
        }
        return false
    }

    getadmin2(){
        return isAdmin
    }

    setAdmin(user:userLogin){
        if(user.isadmin){
            isAdmin = true
        }else{
         isAdmin =false }
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
const USERS:userLogin[] =[]
