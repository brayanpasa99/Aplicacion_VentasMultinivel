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
  Names = "";

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

    this.Names = this.registerClient.value.name.split(" ");

    let name1 = "";
    let name2 = "";
    let name3 = "";
    let name4 = "";

    if (this.Names.length == 2) {
      name1 = this.Names[0];
      name2 = null;
      name3 = this.Names[1];
      name4 = null;
    } else if (this.Names.length == 3) {
      name1 = this.Names[0];
      name2 = this.Names[1];
      name3 = this.Names[2];
      name4 = null;
    } else if (this.Names.length == 4) {
      name1 = this.Names[0];
      name2 = this.Names[1];
      name3 = this.Names[2];
      name4 = this.Names[3];
    }

    const dataClient = {
      CEDULA: this.registerClient.value.id,
      FK_CEDULA_REPRESENTANTE: this.registerClient.value.agent,
      PRIMER_NOMBRE: name1,
      SEGUNDO_NOMBRE: name2,
      PRIMER_APELLIDO: name3,
      SEGUNDO_APELLIDO: name4,
      CORREO_ELECTRONICO: this.registerClient.value.email,
      GENERO: "F",
      FECHA_NACIMIENTO: "29-10-1999",
      TEL_CONTACTO: this.registerClient.value.phonenumber,
      ESTADO: "A",
      CIUDAD: this.registerClient.value.city,
      DIRECCION: this.registerClient.value.address
    }

    this.registerClientService.postCliente(dataClient).subscribe( res => {
      alert(
        "SUCCESS!! :-)\n\n" + res.msg
      );
    });

    

  }

  onReset() {
    this.submitted = false;
    return this.registerClient.reset();
  }

}
