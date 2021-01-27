import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userDataArray: any = [{
    "name": "Nishant",
    "age": 25,
    "dob": "",
    "email": "",
    "profession": "Student",
    "country": "India"
  },
  {
    "name": "Komal",
    "age": 13,
    "dob": "",
    "email": "",
    "profession": "Student",
    "country": "US"
  },
  {
    "name": "Simpi",
    "age": 19,
    "dob": "",
    "email": "",
    "profession": "Student",
    "country": "UK"
  }];

  constructor() { }

  saveDataJson(userData: any){
    if( userData === undefined){
      return "Saving of the user Data failed!!!!";
    }
    this.userDataArray.push(userData);
    return 'User data saved successfully';
  }

  getUserData(){
    return this.userDataArray;
  }
}
