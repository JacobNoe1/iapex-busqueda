import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f5-nariz',
  templateUrl: './f5-nariz.page.html',
  styleUrls: ['./f5-nariz.page.scss'],
})
export class F5NarizPage implements OnInit {

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  tipo: string = '';

  ngOnInit() {
  }

  miForm: FormGroup = this.fb.group({
    'tipo': [ '' , []]
  })

  enviarNariz(){
    this.tipo = this.miForm.controls['tipo'].value;
    this._personaService.obtenerNariz(this.tipo);
  }

}
