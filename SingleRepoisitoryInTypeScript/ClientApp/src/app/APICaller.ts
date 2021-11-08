import { TokenManager } from "./TokenService";
import { HttpClient } from "@angular/common/http";

export abstract class apiCaller {
  abstract callAPI()
  protected token: string
  protected http: HttpClient
  constructor() {
    
  }
  protected prepareToken() {
    const tokenManager = new TokenManager(this.http);
    tokenManager.generateNewToken().then(token=> {
      this.token = token;
      alert(this.token)
  })

  }

}
