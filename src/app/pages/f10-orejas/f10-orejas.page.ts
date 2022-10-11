import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-f10-orejas',
  templateUrl: './f10-orejas.page.html',
  styleUrls: ['./f10-orejas.page.scss'],
})
export class F10OrejasPage implements OnInit {

  constructor(private _personaService: PersonaService,
              private fb: FormBuilder,
              private router: Router) { }

  tipo: string = '';

  ngOnInit() {
  }

  miForm: FormGroup = this.fb.group({
    'tipo': [ '' , []]
  })

  enviarOrejas(){
    this.tipo = this.miForm.controls['tipo'].value;
    this._personaService.obtenerOrejas(this.tipo);
    this.buscar();
    this._personaService.limpiarFormulario();
  }

  buscar(){
    this._personaService.postBusqueda().subscribe(
      resp=> {
        console.log("RESPUESTA", resp)
        this._personaService.asignarEncontrados(resp);
        this.router.navigate(["/r11-resultados"]);
      },
      error => {
        console.log("Error", error)
        this._personaService.asignarEncontrados("No hay conincidencias, intentalo otra vez");
        this.router.navigate(["/r11-resultados"]);
      }
    )
  }
  
}
