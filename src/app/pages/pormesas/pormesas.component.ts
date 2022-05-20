import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pormesas',
  templateUrl: './pormesas.component.html',
  styles: [
  ]
})
export class PormesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise( (resolve, reject) => {
      if(true) resolve('Promesa exitosa');
      else reject('Promesa fallida');
    });

    promesa.then( mensaje => console.log(mensaje))
      .catch(err => console.log(err));


    //Promesas
    this.getUsuarios().then( usuarios => console.log(usuarios));
  }

  getUsuarios(){
    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then(response => response.json() )
        .then(body => resolve(body.data) );
    });

    return promesa;
  }

}
