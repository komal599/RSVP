import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RSVP';
name: string ='';

model: any = [''];
  constructor(private router:Router){}

  ngOninit(): void {

  }

  goToSecondPage() : any {
    //this.model.name = value;
    console.log(this.model);
     this.router.navigateByUrl('/app-userlist');
  }

}
