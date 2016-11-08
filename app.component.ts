import { Component } from '@angular/core';
import { CarPartsComponent } from './car-parts.component';
@Component({
  selector: 'my-app',
  template: `<h1 class="titulo">{{title}}</h1>
  <car-parts></car-parts>`
  ,styles:[`
             .titulo{
      text-align: center;

font-size:60px;letter-spacing:-0px;font-family:georgia;
color: #fff;text-shadow: 0 0 5px #006699, 0 0 10px #006699, 0 0 15px #006699, 0 0 10px #006699, 0 0 15px #006699; /* Damos el resplandor*/
-webkit-text-fill-color: #fff; /* Coloreamos el interior del texto*/
-webkit-text-stroke-color:#fff; /* Color del borde exterior*/
-webkit-text-stroke-width:0.2px;
}

        `
    ]
 
})
export class AppComponent {
  title = 'Ultra racing';
}
