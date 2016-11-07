import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <p>There are {{totalCarParts()}} total parts in stock.</p>
  <ul>
    <li *ngFor="let carPart of carParts">
  <h2>{{carPart.name}}</h2>
 <p> {{carPart.description}}<p>
 <p>{{carPart.price | currency:'EUR':true}}</p>
  <p *ngIf="carPart.inStock>0">{{carPart.inStock}} in Stock</p>
  <p *ngIf="carPart.inStock===0">Out of Stock</p>
 </li>
 </ul>
  `
})
export class AppComponent { 
  title='Ultra racing';
  carParts=[{
"id":1,
"name":"super ludwing",
"description":"these tires are the very best",
"inStock":5,
"price":5.90
  },
  {
"id":2,
"name":"super daniela",
"description":"these tires are the very best",
"inStock":2,
"price":10.90
  },{
  "id":3,
"name":"super german",
"description":"these tires are the very best",
"inStock":0,
"price":8.90
  }];
  totalCarParts(){
    let sum = 0;
    for(let carPart of this.carParts){
sum+=carPart.inStock;
    }
    return sum;
  }
}