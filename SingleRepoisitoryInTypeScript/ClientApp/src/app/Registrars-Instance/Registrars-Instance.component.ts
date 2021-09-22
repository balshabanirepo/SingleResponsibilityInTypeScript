import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../Registrar.service';
import { validationService } from '../validation.service';
import { NgForm } from '@angular/forms';
import { emailValidationService } from '../emailValidation.service';
import { telephoneValidationService } from '../telephoneValidation.service';

@Component({
  selector: 'app-registrar-instance',
  templateUrl: './Registrars-Instance.component.html',
 
})
export class RegistrarItemComponent implements OnInit {
  emailValid: string;
  telephoneValid:string
  constructor(private registrarService: RegistrarService, private emailValidationService: emailValidationService
    , private telephoneValidationService:telephoneValidationService ) { }

  ngOnInit() {
    this.registrarService.RegistrarInstance = {
      id: 0,
      name: null, telephone:null,email:null
    }
  }
  submit(form: NgForm) {
    if (this.http.RegistrarInstance.id == 0) {
      this.http.submitNewType().subscribe(res => {
        this.http.getAllRegistrars()
      },
        err => {
          console.log(err)
        }
      )
    }
    else {
      this.http.editType().subscribe(res => {
        this.http.getAllRegistrars()
      },
        err => {
          console.log(err)
        }
      )
    }

  }
  validateEmail()
  {
   //Create A serviceClass that contacts an API to vlidate email
    this.emailValidationService.validateEmail(this.registrarService.RegistrarInstance.email)
    this.emailValid = this.emailValidationService.result;
  }
  validateTelephone() {
    this.telephoneValidationService.validateTelephone(this.registrarService.RegistrarInstance.telephone)
    this.telephoneValid = this.telephoneValidationService.result;
  }
}





