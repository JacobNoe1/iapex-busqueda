import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f7-labios',
  templateUrl: './f7-labios.page.html',
  styleUrls: ['./f7-labios.page.scss'],
})
export class F7LabiosPage implements OnInit {

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  tipo: string = '';

  ngOnInit() {
  }

  miForm: FormGroup = this.fb.group({
    'tipo': [ '' , []]
  })

  enviarLabios(){
    this.tipo = this.miForm.controls['tipo'].value;
    this._personaService.obtenerLabios(this.tipo);
  }

}
