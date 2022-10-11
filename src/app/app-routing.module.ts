import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'datos-generales',
    loadChildren: () => import('./pages/datos-generales/datos-generales.module').then( m => m.DatosGeneralesPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f0-particularidades',
    loadChildren: () => import('./pages/f0-particularidades/f0-particularidades.module').then( m => m.F0ParticularidadesPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f1-contextura',
    loadChildren: () => import('./pages/f1-contextura/f1-contextura.module').then( m => m.F1ContexturaPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f2-cara',
    loadChildren: () => import('./pages/f2-cara/f2-cara.module').then( m => m.F2CaraPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f3-cabello',
    loadChildren: () => import('./pages/f3-cabello/f3-cabello.module').then( m => m.F3CabelloPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f4-ojos',
    loadChildren: () => import('./pages/f4-ojos/f4-ojos.module').then( m => m.F4OjosPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f5-nariz',
    loadChildren: () => import('./pages/f5-nariz/f5-nariz.module').then( m => m.F5NarizPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f6-boca',
    loadChildren: () => import('./pages/f6-boca/f6-boca.module').then( m => m.F6BocaPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f7-labios',
    loadChildren: () => import('./pages/f7-labios/f7-labios.module').then( m => m.F7LabiosPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f8-barba',
    loadChildren: () => import('./pages/f8-barba/f8-barba.module').then( m => m.F8BarbaPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f9-bigote',
    loadChildren: () => import('./pages/f9-bigote/f9-bigote.module').then( m => m.F9BigotePageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: 'f10-orejas',
    loadChildren: () => import('./pages/f10-orejas/f10-orejas.module').then( m => m.F10OrejasPageModule),
    //canActivate: [LoginGuard],
    //canLoad: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: 'inicioSesion',
    pathMatch: 'full'
  },
  {
    path: 'f00-datos-buscador',
    loadChildren: () => import('./pages/f00-datos-buscador/f00-datos-buscador.module').then( m => m.F00DatosBuscadorPageModule)
  },
  {
    path: 'r11-resultados',
    loadChildren: () => import('./pages/r11-resultados/r11-resultados.module').then( m => m.R11ResultadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
