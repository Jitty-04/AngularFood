import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name=""
  mobileNumber=""
  email=""
  userName=""
  password=""
  confirmPassword=""

  readValues=()=>
  {
    let data:any={"name":this.name,"mobileNumber":this.mobileNumber,"email":this.email,"userName":this.userName,"password":this.password,"confirmPassword":this.confirmPassword}
  
  console.log(data)
  }

  

}
