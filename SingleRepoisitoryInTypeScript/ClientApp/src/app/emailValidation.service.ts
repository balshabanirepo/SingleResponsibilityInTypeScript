import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Registrar } from './Registrar.model';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { apiCaller } from './APICaller';
import { inherits } from 'util';
@Injectable({
  providedIn: 'root'
})
export class emailValidationService extends  apiCaller
{
 
  callAPI()
  {
   
    this.http.get(this.url + '/ValidateEmail', { 'params': this.params }).toPromise().then
      (
        res => {
          this.result = res as string;
        }
      )
  }
  url: string = "api/ValidationService"

  result: string

  token: string

  params:HttpParams

  constructor(private http: HttpClient)
  {
    super()
  }
  
  validateEmail(email:string)
  {
    this.prepareToken()
    this.params = new HttpParams().set('email', email).set('token',this.token);
    this.callAPI()
   
    
    
  }

  
}
 

