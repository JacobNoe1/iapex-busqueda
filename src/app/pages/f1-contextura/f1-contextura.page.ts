import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f1-contextura',
  templateUrl: './f1-contextura.page.html',
  styleUrls: ['./f1-contextura.page.scss'],
})
export class F1ContexturaPage implements OnInit {

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder) { }

  contextura: string = '';

  ngOnInit() {
  }

  miForm: FormGroup = this.fb.group({
    'contextura': [ '' , []]
  })

  enviarContextura(){
    this.contextura = this.miForm.controls['contextura'].value;
    this._personaService.obtenerContextura(this.contextura);
  }

}
