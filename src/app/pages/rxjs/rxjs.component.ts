import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs:Subscription;

  constructor() {
    this.intervalSubs = this.retornaIntervalo().subscribe( console.log );

    //RETRY sigue intentando hasta que lo logre (1) cantidad de intentos
    // this.retornaObservable().pipe( retry() )
    //   .subscribe(
    //     valor => console.log('Subs: ', valor),
    //     error => console.error('Error: ', error),
    //     () => console.log('Obs completado')
    //   )
  }


  retornaIntervalo():Observable<number>{
    return interval(1000).pipe(
      map( valor => valor+1 ), //transforma la data de interval
      filter( filtro => filtro % 2 === 0 ),
      take(8), //cuando se va cortar
    );
  }

  retornaObservable():Observable<number>{
    let i = 0;

    return new Observable<number>(observer => {
      const intervalo = setInterval( () => {
        i++;
        observer.next(i);

        if(i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if(i === 2) observer.error('i llego al 3');

      }, 1000);
    });

  }





  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
