import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mock';
@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-parts.component.html',
    styleUrls: ['app/car-parts.component.css']

})
export class CarPartsComponent {
    carParts: CarPart[];

    ngOnInit() {
        this.carParts = CARPARTS;
    }
    totalCarParts() {
        let sum = 0;
        for (let carPart of this.carParts) {
            sum += carPart.inStock;
        }
        return sum;
    }

    upQuantity(carPart){
      if(carPart.quantity< carPart.inStock) carPart.quantity++;
    }

    downQuantity(carPart){
      if(carPart.quantity!= 0) carPart.quantity--;
    }
}