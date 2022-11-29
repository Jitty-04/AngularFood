import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  mobileNumber=""

  readValues=()=>
  {
    let data:any={"mobileNumber":this.mobileNumber}
    console.log(data)
  }

}
