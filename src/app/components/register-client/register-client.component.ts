import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GendersService } from 'src/app/services/genders.service';
import { IdentificationTypesService } from 'src/app/services/identification-types.service';
import { RegisterClientService } from 'src/app/services/register-client.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {
  registerClient: FormGroup;
  submitted = false;
  Names = "";

  constructor(
    private formBuilder: FormBuilder, 
    private registerClientService: RegisterClientService, 
    private itypesService: IdentificationTypesService,
    private genderService: GendersService) { }

  typesofid: any = [];
  genders: any = [];

  ngOnInit(): void {
    this.registerClient = this.formBuilder.group({
      idtype: ["CC", Validators.required],
      id: ["", Validators.required],
      name: ["", Validators.required],
      gender: ["Masculino", Validators.required],
      birthday: ["", Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      phonenumber: ["", Validators.required],
      agent: ["", Validators.required]
    });

    this.getIdentificationTypes();
    this.getGenders();
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

    let firstname = "";
    let secondname = "";
    let lastname = "";
    let secondlastname = "";

    if (this.Names.length == 2) {
      firstname = this.Names[0];
      secondname = null;
      lastname = this.Names[1];
      secondlastname = null;
    } else if (this.Names.length == 3) {
      firstname = this.Names[0];
      secondname = this.Names[1];
      lastname = this.Names[2];
      secondlastname = null;
    } else if (this.Names.length == 4) {
      firstname = this.Names[0];
      secondname = this.Names[1];
      lastname = this.Names[2];
      secondlastname = this.Names[3];
    }

    const dataClient = {
      CEDULA: this.registerClient.value.id,
      TIPO_IDENTIFICACION: this.registerClient.value.idtype,
      FK_CEDULA_REPRESENTANTE: this.registerClient.value.agent,
      PRIMER_NOMBRE: firstname,
      SEGUNDO_NOMBRE: secondname,
      PRIMER_APELLIDO: lastname,
      SEGUNDO_APELLIDO: secondlastname,
      CORREO_ELECTRONICO: this.registerClient.value.email,
      GENERO: this.registerClient.value.gender,
      FECHA_NACIMIENTO: this.registerClient.value.birthday,
      TEL_CONTACTO: this.registerClient.value.phonenumber,
      ESTADO: "A",
      CIUDAD: this.registerClient.value.city,
      DIRECCION: this.registerClient.value.address
    }

    const dataRepresentanteClient = {
      FK_ID_REPRESENTANTE: this.registerClient.value.agent,
      FK_ID_CLIENTE: this.registerClient.value.id,
      FECHA_INICIO: new Date()
    }

    

    /*this.registerClientService.postCliente(dataClient).subscribe(res => {
      alert(
        "SUCCESS!! :-)\n\n" + res.msg
      );
      //this.showSuccess();
    });*/
  }

  getIdentificationTypes() {
    this.itypesService.getIdentificationTypes().subscribe(res => {
      console.log(res);
      this.typesofid = res;
      console.log("Tipos Id", this.typesofid)
    }, (err) => console.log(err))
  }

  getGenders() {
    this.genderService.getGenders().subscribe(res => {
      console.log(res);
      this.genders = res;
      console.log("Géneros", this.genders)
    }, (err) => console.log(err))
  }

  /*showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }*/

  onReset() {
    this.submitted = false;
    return this.registerClient.reset();
  }

}
