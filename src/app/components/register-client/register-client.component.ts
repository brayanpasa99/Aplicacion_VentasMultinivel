import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterClientService } from 'src/app/services/register-client.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {
  registerClient: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private registerClientService: RegisterClientService) { }

  ngOnInit(): void {
    this.registerClient = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      phonenumber: ["", Validators.required],
      agent: ["", Validators.required]
    })
  }

  get form() {

    return this.registerClient.controls;

  }

  onSubmit() {
    this.submitted = true;


    if (this.registerClient.invalid) {
      return;
    }

    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerClient.value, null, 4)
    );

  }

  postCliente(){
    this.registerClientService.postCliente().subscribe(res => {
      
    });
  }

  onReset() {
    this.submitted = false;
    return this.registerClient.reset();
  }

}
