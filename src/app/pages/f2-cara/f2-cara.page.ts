import { Component, OnInit } from '@angular/core';
import { Cara } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f2-cara',
  templateUrl: './f2-cara.page.html',
  styleUrls: ['./f2-cara.page.scss'],
})
export class F2CaraPage implements OnInit {

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  cara: Cara={ 
    contorno: '',
    color: '',
    particularidad: ''
  };

  miForm: FormGroup = this.fb.group({
    'contorno': [ '' , []],
    'color': [ '' , []],
    'particularidad': [ '' , []]
  })

  ngOnInit() {
  }

  enviarCara(){
    this.cara = this.miForm.value;
    this._personaService.obtenerCara(this.cara);
  }

}
