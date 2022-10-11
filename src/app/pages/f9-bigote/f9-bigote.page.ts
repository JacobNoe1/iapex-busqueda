import { Component, OnInit } from '@angular/core';
import { Bigote } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f9-bigote',
  templateUrl: './f9-bigote.page.html',
  styleUrls: ['./f9-bigote.page.scss'],
})
export class F9BigotePage implements OnInit {

  tiene="Si";

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  bigote: Bigote={
    existe: '',
    capilaridad: '',
    longitud: '',
    particularidad: ''
  };

  miForm: FormGroup = this.fb.group({
    'existe': [ '' , []],
    'capilaridad': [ '' , []],
    'longitud': [ '' , []],
    'particularidad': [ '' , []]
  })

  ngOnInit() {
  }

  limpiarform(){
    console.log("Limpio")
    this.miForm.controls['capilaridad'].setValue('');
    this.miForm.controls['longitud'].setValue('');
    this.miForm.controls['particularidad'].setValue('');
  }

  enviarBigote(){
    this.bigote = this.miForm.value;
    this._personaService.obtenerBigote(this.bigote);
  }

}
