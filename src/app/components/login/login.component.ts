import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginUser = this.formBuilder.group({
      user: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })
  }

  get form() {

    return this.loginUser.controls;

  }

  onSubmit() {
    this.submitted = true;


    if (this.loginUser.invalid) {
      return;
    }

    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.loginUser.value, null, 4)
    );

  }

  postCliente(){
    /*this.loginUser.postCliente().subscribe(res => {
      
    });*/
  }

  onReset() {
    this.submitted = false;
    return this.loginUser.reset();
  }

}
