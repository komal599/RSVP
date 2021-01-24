import { Component, OnInit } from '@angular/core';
//import { Users } from 'src/app/users';
//import { TabledataServiceService } from 'src/app/tabledata-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {


  // users: Users[] = [];
  // constructor(private tableData: TabledataServiceService) { }
  searchText: any;
    heroes = [
      { id: 11, name: 'Mr. Nice', country: 'India' },
      { id: 12, name: 'Narco' , country: 'USA'},
      { id: 13, name: 'Bombasto' , country: 'UK'},
      { id: 14, name: 'Celeritas' , country: 'Canada' },
      { id: 15, name: 'Magneta' , country: 'Russia'},
      { id: 16, name: 'RubberMan' , country: 'China'},
      { id: 17, name: 'Dynama' , country: 'Germany'},
      { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
      { id: 19, name: 'Magma' , country: 'South Africa'},
      { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
    ];

  ngOnInit(): void {

  //   this.tableData.getUsers().subscribe((response: any)=>{
  //     this.users = response;
  //   });
  // }

 }
}
