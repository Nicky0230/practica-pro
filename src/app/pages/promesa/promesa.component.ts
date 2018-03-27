import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html'
})
export class PromesaComponent implements OnInit {

  constructor() {

   this.contarTres().then(
     mensaje => console.log('Termino!', mensaje)
    )
    .catch( error => console.error('Error en la promesa', error));
   }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    // tslint:disable-next-line:no-shadowed-variable
    return new Promise( (resolve, reject) => {

      let contador = 0;

   let itervalo = setInterval( () => {

      contador += 1;
      console.log(  contador );

      if (contador === 3 ) {
        resolve( true );
        // reject('simplement un error');
        clearInterval(itervalo);
      }

    }, 1000 );

    });

  }

}
