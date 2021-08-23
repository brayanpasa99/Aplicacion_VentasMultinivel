import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrarClienteService } from 'src/app/services/registrar-cliente.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.scss']
})
export class RegistrarClienteComponent implements OnInit {
  registerClient: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private registrarClienteService: RegistrarClienteService) { }

  ngOnInit(): void {
    this.registerClient = this.formBuilder.group({
      idCliente: ["", Validators.required],
      nombreCliente: ["", Validators.required],
      direccionCliente: ["", Validators.required],
      ciudadCliente: ["", Validators.required],
      correoCliente: ["", Validators.required, Validators.email],
      telefonoCliente: ["", Validators.required],
      representanteCliente: ["", Validators.required]
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
    this.registrarClienteService.postCliente().subscribe(res => {
      
    });
  }

  onReset() {
    this.submitted = false;
    return this.registerClient.reset();
  }

}
