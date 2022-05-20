import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-guauge',
      submenu: [
        {titulo: 'Main', url: 'dashboard'},
        {titulo: 'ProgressBar', url: 'progreso'},
        {titulo: 'Gráficas', url: 'grafica'},
        {titulo: 'Promesas', url: 'promesas'},
        {titulo: 'RXJS', url: 'rxjs'},
      ]
     }
  ]

  constructor() { }
}
