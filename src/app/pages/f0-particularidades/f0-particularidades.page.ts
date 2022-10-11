import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Particularidades } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-f0-particularidades',
  templateUrl: './f0-particularidades.page.html',
  styleUrls: ['./f0-particularidades.page.scss'],
})
export class F0ParticularidadesPage implements OnInit {

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  particularidades: Particularidades={
    tatuajes: '',
    cicatrices: '',
    falta_extremidad: ''
  };
  
  miForm: FormGroup = this.fb.group({
    'falta_extremidad': [ '' , []],
    'tatuajes': [ '' , []],
    'cicatrices': [ '' , []]
  })

  ngOnInit() {
  }

  enviarParrticularidades(){
    this.particularidades = this.miForm.value;
    this._personaService.obtenerParticularidades(this.particularidades);
  }

  resetearValorNoAplica(extremidad){
    if(this.miForm.controls['tatuajes'].value == extremidad){
      this.miForm.controls['tatuajes'].setValue('');
    }
    if(this.miForm.controls['cicatrices'].value == extremidad){
      this.miForm.controls['cicatrices'].setValue('');
    }

  }


}
