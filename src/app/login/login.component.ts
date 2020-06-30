import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import {LoginServiceService} from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginServiceService) { }

  ngOnInit(): void {
  }
login:Login=new Login("","");

message:any;
public registerLogin()
{
let resp=this.service.doLogin(this.login);
resp.subscribe((data)=>this.message=data);
}

}
