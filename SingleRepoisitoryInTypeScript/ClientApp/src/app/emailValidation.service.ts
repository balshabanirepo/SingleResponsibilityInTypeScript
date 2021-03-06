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
   
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

 
    this.http.get(this.url + '/ValidateEmail', { 'params': this.params, 'headers': headers}).toPromise().then
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

  constructor(protected http: HttpClient)
  {
    super()
    this.http = http;
  }
  
  validateEmail(email: string) {
    this.prepareToken()
      
        this.params = new HttpParams().set('email', email);
    this.callAPI()
  }
   
    
    
  

  
}
 

