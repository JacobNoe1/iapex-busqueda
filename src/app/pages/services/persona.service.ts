import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona, Particularidades, Cara, Cabello, Ojos, Barba, Bigote, Buscador } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  formPersona: Persona;
  formPersonaLimpio: Persona;

  personasEncontradas: Persona[];

  postBusqueda(){
    console.log("AQUI", this.formPersona);
    // Línea 20 se cambia la url por la url del api de phyton el algoritmo  
    return this.http.post<Persona>("http://192.168.100.7:5000/buscar", this.formPersona);
  }

  asignarEncontrados(encontrados: any){
    this.personasEncontradas = encontrados
  }



  limpiarFormulario(){
    this.formPersona = this.formPersonaLimpio;
    console.log("LIMPIO",this.formPersona);
  }

  
  obtenerDatosBuscador(datosBuscador: Buscador){
    console.log("DTOSBUS" ,datosBuscador);
    //console.log("FORM", this.formPersona);
    this.formPersona = datosBuscador;
    console.log(this.formPersona);
  }

  obtenerDatosGenerales(datosGenerales: Persona){
    this.formPersona = datosGenerales;
    //console.log(this.formPersona);
  }

  obtenerParticularidades(particularidades: Particularidades){
    this.formPersona.particularidades = particularidades;
    //console.log(this.formPersona);
  }

  obtenerContextura(contextura: string){
    this.formPersona.contextura = contextura;
    //console.log(this.formPersona);
  }

  obtenerCara(cara: Cara){
    this.formPersona.cara = cara;
    //console.log(this.formPersona);
  }

  obtenerCabello(cabello: Cabello){
    this.formPersona.cabello = cabello;
    //console.log(this.formPersona);
  }

  obtenerOjos(ojos: Ojos){
    this.formPersona.ojos = ojos;
    //console.log(this.formPersona);
  }

  obtenerNariz(nariz: string){
    this.formPersona.nariz = nariz;
    //console.log(this.formPersona);
  }

  obtenerBoca(boca: string){
    this.formPersona.boca = boca;
    //console.log(this.formPersona);
  }

  obtenerLabios(labios: string){
    this.formPersona.labios = labios;
    //console.log(this.formPersona);
  }
 
  obtenerBarba(barba: Barba){
    this.formPersona.barba = barba;
    //console.log(this.formPersona);
  }

  obtenerBigote(bigote: Bigote){
    this.formPersona.bigote = bigote;
    //console.log(this.formPersona);
  }

  obtenerOrejas(orejas: string){
    this.formPersona.orejas = orejas;
    //console.log(this.formPersona);
  }

}
