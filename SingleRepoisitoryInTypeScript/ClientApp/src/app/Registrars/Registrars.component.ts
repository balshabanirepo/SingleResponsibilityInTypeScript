import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../Registrar.service'
@Component({
  selector: 'registrars-component',
  templateUrl: './Registrars.component.html',

})
export class RegistrarsComponent implements OnInit
{
  constructor(private service: RegistrarService) { }
  ngOnInit() {
    
    this.service.getAllRegistrars()
  }
  fillRegistrarInfo(listItem) {
    this.service.RegistrarInstance.id = listItem.id
    this.service.RegistrarInstance.name = listItem.name
    this.service.RegistrarInstance.email = listItem.email
    this.service.RegistrarInstance.telephone = listItem.telephone

  }
  
}
