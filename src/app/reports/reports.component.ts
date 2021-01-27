import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  // heroData = [
  //   { name: "UK", value: 12 },
  //   { name: "US", value: 11 },
  //   { name: "India", value: 11 },
  //   { name: "Europe", value: 5 },
  //   { name: "Asia", value: 13 }
  // ];
  public allData = [];
  public professionalStudentCount : any = [{ name: 'Student', value: 0},
                                            { name: 'Employed', value: 0 }]

  public peopleByAgeRange : any = [{ name: '13-18', value: 0},
                                            { name: '18-25', value: 0 }, { name: '25+', value: 0 }]
  

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.allData = this.dataService.getUserData();
    this.filterBasedOnProfession();
    this.filterBasedOnAge();
}
filterBasedOnProfession(){
  for( var i=0 ;i < this.allData.length; i++){
       if( (this.allData[i]["profession"] === 'Student')){
          this.professionalStudentCount[0].value = this.professionalStudentCount[0].value + 1;
       }
       if( (this.allData[i]["profession"] === 'Employed') ){
        this.professionalStudentCount[1].value = this.professionalStudentCount[1].value + 1;
     }
  }

  

}

filterBasedOnAge(){
  for( var i=0 ;i < this.allData.length; i++){
       if( (this.allData[i]["age"] > 12 &&  this.allData[i]["age"] < 19)){
          this.peopleByAgeRange[0].value = this.peopleByAgeRange[0].value + 1;
       }
       if( (this.allData[i]["age"] >= 19 &&  this.allData[i]["age"] < 25) ){
        this.peopleByAgeRange[1].value = this.peopleByAgeRange[1].value + 1;
     }
     if( (this.allData[i]["age"] >= 25) ){
      this.peopleByAgeRange[2].value = this.peopleByAgeRange[2].value + 1;
   }
  }

  

}



}

