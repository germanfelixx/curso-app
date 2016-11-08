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
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1 class=\"titulo\">{{title}}</h1>\n  <car-parts></car-parts>",
            styles: ["\n             .titulo{\n      text-align: center;\n\nfont-size:60px;letter-spacing:-0px;font-family:georgia;\ncolor: #fff;text-shadow: 0 0 5px #006699, 0 0 10px #006699, 0 0 15px #006699, 0 0 10px #006699, 0 0 15px #006699; /* Damos el resplandor*/\n-webkit-text-fill-color: #fff; /* Coloreamos el interior del texto*/\n-webkit-text-stroke-color:#fff; /* Color del borde exterior*/\n-webkit-text-stroke-width:0.2px;\n}\n\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map