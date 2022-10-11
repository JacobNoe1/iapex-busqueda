import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f6-boca',
  templateUrl: './f6-boca.page.html',
  styleUrls: ['./f6-boca.page.scss'],
})
export class F6BocaPage implements OnInit {

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  tipo: string = '';

  ngOnInit() {
  }

  miForm: FormGroup = this.fb.group({
    'tipo': [ '' , []]
  })

  enviarBoca(){
    this.tipo = this.miForm.controls['tipo'].value;
    this._personaService.obtenerBoca(this.tipo);
  }

}
