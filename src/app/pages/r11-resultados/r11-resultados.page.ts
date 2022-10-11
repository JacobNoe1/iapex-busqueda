import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-r11-resultados',
  templateUrl: './r11-resultados.page.html',
  styleUrls: ['./r11-resultados.page.scss'],
})
export class R11ResultadosPage implements OnInit {

  constructor(private _personaService: PersonaService) {
    this.verEncontrados();
   }

   resultados0:any;
   resultados1:any = [];

  ngOnInit() {
  }

  verEncontrados(){
    
   this.resultados0 = this._personaService.personasEncontradas;
   this.resultados0.forEach(res => {
    console.log("resultados0", this.resultados0 )
    if(res != null){
      this.resultados1.push(res);
      console.log("resultados1", this.resultados1 )
    }
   });
  }

}
