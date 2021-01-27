import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
registrationForm: FormGroup;
  responseMessage: string = '';
  model: any = {};
  name: any;
  age:any;
  birthday: any;



  constructor(private readonly formBuilder: FormBuilder, private dataService: DataService) {
    this.registrationForm = formBuilder.group({
      
      name: new FormControl('', Validators.required),
      age:  new FormControl(''),
      dob: new FormControl(''),
      email: new FormControl(''),
      profession: new FormControl(''),
      country: new FormControl(''),
      guests: new FormControl(''),
      address: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.registrationForm.value);
    this.responseMessage = this.dataService.saveDataJson(this.registrationForm.value);
  }

}
