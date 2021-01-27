import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
//import { Users } from 'src/app/users';
//import { TabledataServiceService } from 'src/app/tabledata-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
   public userArray: any;
   public filteredArray: any;
   public serarchString: String = '';
  

   constructor( private dataService: DataService){

   }

  ngOnInit(): void {
    this. userArray = this.dataService.getUserData();
    this.filteredArray = this.userArray;
 }
filterArray(){
  this.filteredArray = this.userArray.filter((data: any)=>{
      if( (data.name != undefined && data.name.toLowerCase().includes(this.serarchString)) || 
      ( data.country != undefined && data.country.toLowerCase().includes(this.serarchString)))
        return data;
  })
}

filterDataOnDebounce(){
  let context = this;
  let debounceTimer;
  clearInterval(debounceTimer);
  debounceTimer = setTimeout(()=>{
    this.filterArray();
  }, 2000);
}

}
