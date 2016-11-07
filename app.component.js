"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ultra racing';
        this.carParts = [{
                "id": 1,
                "name": "super ludwing",
                "description": "these tires are the very best",
                "inStock": 5,
                "price": 5.90
            },
            {
                "id": 2,
                "name": "super daniela",
                "description": "these tires are the very best",
                "inStock": 2,
                "price": 10.90
            }, {
                "id": 3,
                "name": "super german",
                "description": "these tires are the very best",
                "inStock": 0,
                "price": 8.90
            }];
    }
    AppComponent.prototype.totalCarParts = function () {
        var sum = 0;
        for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
            var carPart = _a[_i];
            sum += carPart.inStock;
        }
        return sum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n  <p>There are {{totalCarParts()}} total parts in stock.</p>\n  <ul>\n    <li *ngFor=\"let carPart of carParts\">\n  <h2>{{carPart.name}}</h2>\n <p> {{carPart.description}}<p>\n <p>{{carPart.price | currency:'EUR':true}}</p>\n  <p *ngIf=\"carPart.inStock>0\">{{carPart.inStock}} in Stock</p>\n  <p *ngIf=\"carPart.inStock===0\">Out of Stock</p>\n </li>\n </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map