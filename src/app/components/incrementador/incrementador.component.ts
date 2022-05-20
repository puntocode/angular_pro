import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {

  @Input('renombrar') progreso: number = 50; //recibe desde el padre
  @Input() btnClass: string = 'btn-primary'; //recibe desde el padre
  @Output() valorSalida: EventEmitter<number> = new EventEmitter(); //que tipo de valor fluye en el<>

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor:number){

    if(this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      this.valorSalida.emit(100);
      return;
    }

    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      this.valorSalida.emit(0);
      return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }


  onChange(newValue:number){
    if(!newValue || newValue <= 0){
      this.progreso = 0;
    } else if(newValue <= 100) {
      this.progreso = 100;
    }else{
      this.progreso = newValue;
    }

    this.valorSalida.emit(this.progreso);
  }

}
