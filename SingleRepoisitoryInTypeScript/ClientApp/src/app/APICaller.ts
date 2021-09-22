export abstract class apiCaller {
  abstract callAPI()
  protected token:string
  protected prepareToken() {
    this.token = "token";

  }

}
