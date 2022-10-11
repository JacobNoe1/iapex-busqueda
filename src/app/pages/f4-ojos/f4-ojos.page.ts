import { Component, OnInit } from '@angular/core';
import { Ojos } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f4-ojos',
  templateUrl: './f4-ojos.page.html',
  styleUrls: ['./f4-ojos.page.scss'],
})
export class F4OjosPage implements OnInit {

  constructor(private _personaService: PersonaService, 
              private fb: FormBuilder) { }

  ojos: Ojos={
    color: '',
    tamano: '',
    particularidad: ''
  };

  miForm: FormGroup = this.fb.group({
    'color': [ '' , []],
    'tamano': [ '' , []],
    'particularidad': [ '' , []]
  })

  ngOnInit() {
  }

  enviarOjos(){
    this.ojos = this.miForm.value;
    this._personaService.obtenerOjos(this.ojos);
  }


}
