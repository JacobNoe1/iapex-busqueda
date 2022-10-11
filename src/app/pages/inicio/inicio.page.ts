import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Persona } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  ngOnInit() {
  }

}
