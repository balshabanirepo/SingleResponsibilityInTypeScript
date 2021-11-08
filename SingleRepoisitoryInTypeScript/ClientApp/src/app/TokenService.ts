import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TokenManager {
  private responeData: string
  private apiUrlForTokenRetrieve = 'api/TokenManagement/GenerateNewToken'
  token: string

  constructor(private client: HttpClient) {

  }
  public generateNewToken = (): Promise<string> => {
    return this.client.get(this.apiUrlForTokenRetrieve,
      //  { 'headers': headers }
    ).toPromise().then(token =>
    {
     return JSON.stringify(token)
     
      })
  }
  
}

    

  

