import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  progreso1:number = 15;
  progreso2:number = 50;

  get porcentaje1(){
    return `${this.progreso1}%`;
  }

  get porcentaje2(){
    return `${this.progreso2}%`;
  }

}
