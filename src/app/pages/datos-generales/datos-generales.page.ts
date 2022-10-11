import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.page.html',
  styleUrls: ['./datos-generales.page.scss'],
})
export class DatosGeneralesPage implements OnInit {

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  dtsGenr: Persona={
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    sexo: '',
    estatura: 0,
    edad: 0,
    peso: 0,
  };
//  pattern="[A-Za-z]+"

  miForm: FormGroup = this.fb.group({
    'nombre': [ '' , [Validators.pattern('[A-Za-zñÑáéíóúÁÉÍÓÚ]+'), Validators.maxLength(30)]],
    'apellido_paterno': [ '', [Validators.pattern('[A-Za-zñÑáéíóúÁÉÍÓÚ]+'), Validators.maxLength(50)]],
    'apellido_materno': [ '', [Validators.pattern('[A-Za-zñÑáéíóúÁÉÍÓÚ]+'), Validators.maxLength(50)]],
    'sexo': [ 'Masculino' , []],
    'estatura': [ 0 , []],
    'edad': [ 0 , [Validators.max(220)]],
    'peso': [ 0 , []]
  })

  campoNombre(campo: string){
    return this.miForm.controls[campo].errors?.pattern
    && this.miForm.controls[campo]?.touched;
  }
    
  ngOnInit() {
  }

  enviarDatosGenerales(){
    this.dtsGenr = this.miForm.value;
    this._personaService.obtenerDatosGenerales(this.dtsGenr);
  }




}
