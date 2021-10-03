import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Registrar } from './Registrar.model';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { apiCaller } from './APICaller';
import { inherits } from 'util';
@Injectable({
  providedIn: 'root'
})
export class telephoneValidationService extends  apiCaller
{
 
  callAPI()
  {
   
    this.http.get(this.url + '/ValidatePhone', { 'params': this.params }).toPromise().then
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
  
  validateTelephone(Telephone:string)
  {
    //this.prepareToken()
    alert(Telephone)
    this.params = new HttpParams().set('Telephone', Telephone)

    this.callAPI()
   
    
    
  }
}
 

