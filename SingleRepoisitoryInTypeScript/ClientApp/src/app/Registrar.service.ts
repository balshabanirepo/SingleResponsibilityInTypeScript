import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registrar } from './Registrar.model';
@Injectable({
  providedIn: 'root'
})
export class RegistrarService
{
  url: string = "api/RegistrarsRepositories"

  result: Registrar[]
  RegistrarInstance: Registrar
  constructor(private http: HttpClient)
{
    }
  getAllRegistrars()
  {
   
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    this.http.get(this.url,{'headers': headers }).toPromise().then
      (
        res =>
        {
          this.result = res as Registrar[];
        }
      )
  }
  submitNewType() {

   return (this.http.post(this.url,this.RegistrarInstance))
  }
  editType() {

    return (this.http.put(this.url+'/'+this.RegistrarInstance.id, this.RegistrarInstance))
  }
  deleteType() {

    return (this.http.delete(this.url + '/' + this.RegistrarInstance.id))
  }
}
