import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginUser = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get form() {
    return this.loginUser.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginUser.invalid) {
      return;
    }

    const dataUser = {
      USER: this.loginUser.value.user,
      PASSWORD: this.loginUser.value.password,
    };

    this.loginService.getLogin(dataUser).subscribe((res) => {
        alert('SUCCESS!! :-)\n\n' + res.msg);
        this.router.navigate(['lobby']);
    }, err => {
      console.log(err);
      alert(err.error.msg);
      const newPassword = prompt("Ingrese su nueva contraseña", "");

      const dataUser = {
        USER: this.loginUser.value.user,
        NEWPASSWORD: newPassword,
      };

      this.loginService.updatePassword(dataUser).subscribe((res) => {
        alert('Contraseña cambiada: ' + res.msg);
        this.router.navigate(['login']);
      }, err => {
        alert(err.error.msg);
      });
    });

    /*alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.loginUser.value, null, 4)
    );*/
  }

  postCliente() {
    /*this.loginUser.postCliente().subscribe(res => {
      
    });*/
  }

  onReset() {
    this.submitted = false;
    return this.loginUser.reset();
  }
}
