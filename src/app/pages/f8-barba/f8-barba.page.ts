import { Component, OnInit } from '@angular/core';
import { Barba } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f8-barba',
  templateUrl: './f8-barba.page.html',
  styleUrls: ['./f8-barba.page.scss'],
})
export class F8BarbaPage implements OnInit {

  tiene="Si";

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  barba: Barba={
    existe: '',
    capilaridad: '',
    estilo: '',
    longitud: '',
    particularidad: ''
  };

  miForm: FormGroup = this.fb.group({
    'existe': [ '' , []],
    'capilaridad': [ '' , []],
    'estilo': [ '' , []],
    'longitud': [ '' , []],
    'particularidad': [ '' , []]
  })

  ngOnInit() {
  }

  limpiarform(){
    console.log("Limpio")
    this.miForm.controls['capilaridad'].setValue('');
    this.miForm.controls['estilo'].setValue('');
    this.miForm.controls['longitud'].setValue('');
    this.miForm.controls['particularidad'].setValue('');
  }
  
  enviarBarba(){
    this.barba = this.miForm.value;
    this._personaService.obtenerBarba(this.barba);
  }

}
