import { Component, OnInit } from '@angular/core';
import { Cabello } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f3-cabello',
  templateUrl: './f3-cabello.page.html',
  styleUrls: ['./f3-cabello.page.scss'],
})
export class F3CabelloPage implements OnInit {

  constructor(private _personaService: PersonaService, 
              private fb: FormBuilder) { }

  cabello: Cabello={
    color: '',
    longitud: '',
    forma: '',
    calvicie: '',
    particularidad: ''
  };

  miForm: FormGroup = this.fb.group({
    'color': [ '' , []],
    'longitud': [ '' , []],
    'forma': [ '' , []],
    'calvicie': [ '' , []],
    'particularidad': [ '' , []]
  })

  ngOnInit() {
  }

  enviarCabello(){
    this.cabello = this.miForm.value;
    this._personaService.obtenerCabello(this.cabello);
  }

}
