import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../services/persona.service';
import { Buscador } from '../interfaces/persona.interface';

@Component({
  selector: 'app-f00-datos-buscador',
  templateUrl: './f00-datos-buscador.page.html',
  styleUrls: ['./f00-datos-buscador.page.scss'],
})
export class F00DatosBuscadorPage implements OnInit {

  constructor(private _personaService: PersonaService,
    private fb: FormBuilder) { }

// eslint-disable-next-line @typescript-eslint/member-ordering
dtsGenrBus: Buscador={
nombre: '',
apellidos: '',
telefono: ''
};
//  pattern="[A-Za-z]+"

miForm: FormGroup = this.fb.group({
'nombreB': [ '' , [Validators.pattern('[A-Za-zñÑáéíóúÁÉÍÓÚ]+'), Validators.maxLength(30)]],
'apellidosB': [ '', [Validators.pattern('[A-Za-zñÑáéíóúÁÉÍÓÚ]+'), Validators.maxLength(30)]],
'telefonoB': [ '' , [Validators.pattern('[0-9]+'), Validators.maxLength(10)]]
})

campoNombre(campo: string){
return this.miForm.controls[campo].errors?.pattern
&& this.miForm.controls[campo]?.touched;
}

ngOnInit() {
}

enviarDatosBuscador(){
this.dtsGenrBus = this.miForm.value;
console.log();
this._personaService.obtenerDatosBuscador(this.dtsGenrBus);
}


}
