webpackJsonp([1,5],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.innerWidth = window.innerWidth;
        this.getCurrentSize = function () {
            var viewportWidth = this.innerWidth;
            switch (true) {
                case (viewportWidth < 576):
                    return 'xs';
                case (viewportWidth < 768):
                    return 'sm';
                case (viewportWidth < 992):
                    return 'md';
                case (viewportWidth < 1200):
                    return 'lg';
                case (viewportWidth >= 1200):
                    return 'xl';
                default:
                    return 'xs';
            }
        };
        this.currentSize = this.getCurrentSize();
    }
    AppComponent.prototype.onResize = function (event) {
        this.innerWidth = event.target.innerWidth; // window width
        this.currentSize = this.getCurrentSize();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(408),
        styles: [__webpack_require__(402)],
        host: {
            '(window:resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicComponent = (function () {
    function BasicComponent() {
        this.items = [{
                xl: 3,
                componentSelector: 'random-widget',
                extra: 'first',
                order: 0,
                xlOrder: 0,
                mdOrder: 0
            }, {
                xl: 3,
                componentSelector: 'random-widget',
                extra: 'second',
                order: 1,
                xlOrder: 1,
                mdOrder: 1
            }, {
                xl: 3,
                componentSelector: 'random-widget',
                extra: 'third',
                order: 2,
                xlOrder: 2,
                mdOrder: 2
            }, {
                xl: 3,
                componentSelector: 'random-widget',
                extra: 'forth',
                order: 3,
                xlOrder: 3,
                mdOrder: 3
            }];
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    return BasicComponent;
}());
BasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic',
        template: __webpack_require__(409),
        styles: [__webpack_require__(403)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], BasicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__random_widget_random_widget_component__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = (function () {
    function CardComponent() {
        this.availableComponents = [
            {
                component: __WEBPACK_IMPORTED_MODULE_1__random_widget_random_widget_component__["a" /* RandomWidgetComponent */],
                selector: 'random-widget'
            }
        ];
        this.items = [{
                xl: 3,
                componentSelector: 'random-widget',
                order: 0,
                xlOrder: 0,
                mdOrder: 0
            }, {
                xl: 3,
                componentSelector: 'random-widget',
                order: 1,
                xlOrder: 1,
                mdOrder: 1
            }, {
                xl: 3,
                componentSelector: 'random-widget',
                order: 2,
                xlOrder: 2,
                mdOrder: 2
            }, {
                xl: 3,
                componentSelector: 'random-widget',
                order: 3,
                xlOrder: 3,
                mdOrder: 3
            }];
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    return CardComponent;
}());
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card',
        template: __webpack_require__(410),
        styles: [__webpack_require__(404)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], CardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    return ExamplesComponent;
}());
ExamplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-examples',
        template: __webpack_require__(411),
        styles: [__webpack_require__(405)]
    }),
    __metadata("design:paramtypes", [])
], ExamplesComponent);

//# sourceMappingURL=examples.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RandomWidgetComponent = (function () {
    function RandomWidgetComponent() {
        this.randomColor = function () {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        };
        this.randomHeight = function () {
            return Math.floor(Math.random() * 500);
        };
        console.log('generated');
        this.color = this.randomColor();
        this.height = this.randomHeight();
    }
    RandomWidgetComponent.prototype.ngOnInit = function () {
    };
    return RandomWidgetComponent;
}());
RandomWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'random-widget',
        template: __webpack_require__(412),
        styles: [__webpack_require__(401)]
    }),
    __metadata("design:paramtypes", [])
], RandomWidgetComponent);

//# sourceMappingURL=random-widget.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 367;


/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(380);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_basic_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_examples_component__ = __webpack_require__(316);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/examples', pathMatch: 'full' },
    { path: 'basic', component: __WEBPACK_IMPORTED_MODULE_2__basic_basic_component__["a" /* BasicComponent */] },
    { path: 'card', component: __WEBPACK_IMPORTED_MODULE_3__card_card_component__["a" /* CardComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__examples_examples_component__["a" /* ExamplesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__random_widget_random_widget_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_basic_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bootgrid_bootgrid_module__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_card_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_examples_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_exemplify__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_exemplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_exemplify__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__random_widget_random_widget_component__["a" /* RandomWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_6__basic_basic_component__["a" /* BasicComponent */],
            __WEBPACK_IMPORTED_MODULE_8__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__examples_examples_component__["a" /* ExamplesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__bootgrid_bootgrid_module__["a" /* BootgridModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_exemplify__["ExemplifyModule"]
        ],
        providers: [],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__random_widget_random_widget_component__["a" /* RandomWidgetComponent */]],
        exports: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(313);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_bootgrid_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_resizable_element__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_bg_content_component__ = __webpack_require__(382);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootgridModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BootgridModule = (function () {
    function BootgridModule() {
    }
    return BootgridModule;
}());
BootgridModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular_resizable_element__["a" /* ResizableModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__components_bootgrid_component__["a" /* BootgridComponent */], __WEBPACK_IMPORTED_MODULE_5__components_bg_content_component__["a" /* BgContentComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__components_bootgrid_component__["a" /* BootgridComponent */], __WEBPACK_IMPORTED_MODULE_5__components_bg_content_component__["a" /* BgContentComponent */]]
    })
], BootgridModule);

//# sourceMappingURL=bootgrid.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BgContentComponent = (function () {
    function BgContentComponent(el, componentFactoryResolver, viewContainerRef, renderer) {
        this.el = el;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.getCompoment = function () {
            for (var i = 0; i < this.availableComponents.length; i++) {
                //console.log(this.availableComponents[i]);
                if (this.availableComponents[i].selector === this.insertedComponent) {
                    //console.log('match');
                    return this.availableComponents[i].component;
                }
            }
        };
    }
    BgContentComponent.prototype.ngOnChanges = function (changes) {
        var insertedComponent = changes.insertedComponent;
        if (insertedComponent.currentValue) {
            this.renderComponent();
        }
    };
    BgContentComponent.prototype.renderComponent = function () {
        //console.log(this.insertedComponent);
        // If we don't want to hold a reference to the component type, we can also say:
        //this.viewContainerRef.clear();
        //this.renderer.createElement(this.el.nativeElement,'app-random-widget');
        //componentRef.changeDetectorRef.detectChanges();
        var comp = this.getCompoment();
        //console.log(comp);
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
        this.viewContainerRef.clear();
        var componentRef = this.viewContainerRef.createComponent(componentFactory);
        componentRef.changeDetectorRef.detectChanges();
    };
    return BgContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _a || Object)
], BgContentComponent.prototype, "insertedComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BgContentComponent.prototype, "availableComponents", void 0);
BgContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bg-content',
        template: '<b>Inserted Component:</b>'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object])
], BgContentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=bg-content.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootgridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BootgridComponent = (function () {
    function BootgridComponent(dragulaService, cdr) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.cdr = cdr;
        this.items = [];
        this.innerWidth = window.innerWidth;
        this.edit = false;
        this.editLayout = function () {
            this.edit = !this.edit;
        };
        this.addItem = function () {
            this.items.push({
                xl: 4,
                componentSelector: 'random-widget',
                order: this.items.length,
                xsOrder: this.items.length,
                smOrder: this.items.length,
                mdOrder: this.items.length,
                lgOrder: this.items.length,
                xlOrder: this.items.length,
                id: this.generateId()
            });
            this.items.sort(this.getOrderForSize(this.currentSize));
        };
        this.deleteItem = function (item) {
            for (var i = 0; i < this.items.length; i++) {
                if (item.id && this.items[i].id === item.id) {
                    this.items.splice(i, 1);
                }
            }
        };
        this.grow = function (item) {
            if (!item[this.currentSize] || item[this.currentSize] < 12) {
                item[this.currentSize] = !item[this.currentSize] ? 12 : item[this.currentSize] + 1;
            }
        };
        this.shrink = function (item) {
            if (!item[this.currentSize] || item[this.currentSize] > 1) {
                item[this.currentSize] = !item[this.currentSize] ? 12 : item[this.currentSize] - 1;
            }
        };
        this.getCurrentSize = function () {
            var viewportWidth = this.innerWidth;
            switch (true) {
                case (viewportWidth < 576):
                    return 'xs';
                case (viewportWidth < 768):
                    return 'sm';
                case (viewportWidth < 992):
                    return 'md';
                case (viewportWidth < 1200):
                    return 'lg';
                case (viewportWidth >= 1200):
                    return 'xl';
                default:
                    return 'xs';
            }
        };
        this.updateOrder = function (newPosition, movedItem, size) {
            var oldPosition = movedItem[size];
            var increase = newPosition > oldPosition;
            var diff = oldPosition - newPosition;
            //console.log(this.items);
            //console.log('moved right? ' + increase,'new pos: ' + newPosition,'old pos: ' + oldPosition);
            // if we have no position for current size...
            if (!oldPosition) {
                // ...loop through all items and set current position as default for this size
                for (var i = 0; i < this.items.length; i++) {
                    this.items[i][size] = i;
                }
                oldPosition = movedItem[size];
            }
            for (var i = 0; i < this.items.length; i++) {
                var currentPos = this.items[i][size];
                //console.log(currentPos);
                // if this is the moved item...
                if (currentPos === oldPosition) {
                    // ...update current size position with new position
                    this.items[i][size] = newPosition;
                    //console.log('this one moved: '+this.items[i].extra);
                }
                else if (increase && currentPos > oldPosition && currentPos <= newPosition) {
                    // ...move this item to the left to make room
                    //console.log('this one was pushed left: '+this.items[i].extra);
                    this.items[i][size] = currentPos - 1;
                }
                else if (!increase && currentPos >= newPosition && currentPos < oldPosition) {
                    // ...move this item to the right to make room
                    //console.log('this one was pushed right 1: '+this.items[i].extra);
                    this.items[i][size] = currentPos + 1;
                }
            }
            //console.log(this.items);
        };
        this.getGridItemById = function (id) {
            //console.log(id,this.items);
            for (var i = 0; i < this.items.length; i++) {
                //console.log(this.items[i].order);
                if (this.items[i].order == id) {
                    //console.log('yeah');
                    return this.items[i];
                }
            }
        };
        var getWindow = function () {
            return window.innerWidth;
        };
        this.innerWidth = getWindow();
        this.currentSize = this.getCurrentSize();
        this.bagId = this.generateId();
        window.onresize = function () {
            _this.innerWidth = getWindow();
            _this.currentSize = _this.getCurrentSize();
            var size = _this.items[0][_this.currentSize];
            _this.items.sort(_this.getOrderForSize(_this.currentSize));
            _this.cdr.detectChanges(); //running change detection manually
        };
        dragulaService.setOptions(this.bagId, {
            moves: function (el, container, handle) {
                return !(handle instanceof SVGElement) && handle.className.indexOf('bg-handle') !== -1;
            }
        });
        dragulaService.drop.subscribe(function (value) {
            //console.log(value);
            _this.onDrop(value.slice(1));
        });
    }
    BootgridComponent.prototype.onResize = function (event, item) {
        //console.log('Element was resized', event, Math.round((event.rectangle.width/this.innerWidth)*12));
        var proposedWidth = Math.round((event.rectangle.width / this.innerWidth) * 12);
        if (proposedWidth < 13) {
            item[this.currentSize] = proposedWidth;
        }
    };
    BootgridComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        var index = this.getElementIndex(e);
        //let item = this.items[index];
        var sizeOrder = this.currentSize + 'Order';
        //const startPos = e.getAttribute('data-org-index');
        console.log(e);
        var id = e.getAttribute('data-grid-item-id');
        console.log(id);
        var endPos = index;
        //console.log(endPos,e.getAttribute('data-index'));
        var gridItem = this.getGridItemById(id);
        console.log(gridItem);
        //console.log(endPos,gridItem[sizeOrder])
        this.updateOrder(endPos, gridItem, sizeOrder);
        //this.items[startPos][sizeOrder] = endPos;
        //console.log(e.getAttribute('data-index'),e.getAttribute('data-org-index'),index, item)
    };
    BootgridComponent.prototype.getElementIndex = function (el) {
        //console.log(el,el.children);
        //console.log('index',[].slice.call(el.children).indexOf(el.children[1]));
        return [].slice.call(el.parentElement.children).indexOf(el);
    };
    BootgridComponent.prototype.ngOnInit = function () {
    };
    BootgridComponent.prototype.ngOnChanges = function (changes) {
        //console.log(changes);
        if (changes['items']) {
            for (var i = 0; i < this.items.length; i++) {
                if (!this.items[i].id) {
                    this.items[i].id = this.generateId();
                }
            }
        }
    };
    BootgridComponent.prototype.getOrderForSize = function (size) {
        return function (a, b) {
            if (a[size + 'Order'] < b[size + 'Order'])
                return -1;
            if (a[size + 'Order'] > b[size + 'Order'])
                return 1;
            return 0;
        };
    };
    ;
    BootgridComponent.prototype.generateId = function () {
        var d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    return BootgridComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], BootgridComponent.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BootgridComponent.prototype, "items", void 0);
BootgridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bootgrid',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "<div class=\"column-wrapper row\" ngClass=\"{{edit ? 'edit-row':''}}\" [dragula]=\"bagId\">\n  <div *ngFor=\"let item of items; let i = index;\" class=\"mb-4\" [attr.data-grid-item-id]=\"item.order\" ngClass=\"{{'col-' + (!item.xs ? 12:item.xs)}} {{'col-sm-' + (!item.sm ? 0:item.sm)}} {{'col-md-' + (!item.md ? 0:item.md)}} {{'col-lg-' + (!item.lg ? 0:item.lg)}} {{'col-xl-' + (!item.xl ? 0:item.xl)}} {{edit ? 'edit-column':''}}\" mwlResizable\n       (resizing)=\"onResize($event,item)\">\n    <ng-template [ngTemplateOutlet]=\"template\" [ngOutletContext]=\"{\n        item: item\n      }\">\n    </ng-template>\n    <div class=\"bg-resize-handle\" mwlResizeHandle [resizeEdges]=\"{right: true}\"></div>\n  </div>\n</div>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], BootgridComponent);

var _a, _b, _c;
//# sourceMappingURL=bootgrid.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, ".first {\n  /*background: cornflowerblue;*/ }\n\n.second {\n  background: mediumpurple; }\n\n.third {\n  background: darkturquoise; }\n\n.widget {\n  /*width:100%;*/ }\n\n.widget > div {\n  /*width:100%;*/\n  height: 40px;\n  background: magenta;\n  transition: width ease-in-out 500ms;\n  border: solid 1px; }\n\n.widget + .widget {\n  /*margin-top: 10px;*/ }\n\n.widgets {\n  padding: 1rem;\n  background: greenyellow; }\n\n.drop-area {\n  min-height: 40px; }\n\n.column-wrapper {\n  margin-left: -30px;\n  margin-right: -30px; }\n\n.row-controls {\n  position: absolute;\n  right: 0;\n  width: 20px; }\n\n.row-controls button {\n  float: left;\n  width: 20px;\n  height: 20px;\n  padding: 0; }\n\n.edit-column-max {\n  height: 100%;\n  width: 25%;\n  display: block;\n  top: 0;\n  right: 0; }\n\n.card-block {\n  height: 240px;\n  overflow: auto; }\n\n.bg-handle {\n  cursor: move; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, ".basic-box {\n  background: #613d7c;\n  width: 100%;\n  height: 240px;\n  color: #ffffff;\n  padding: 1rem;\n  overflow: auto; }\n\n.edit-row .bg-resize-handle {\n  -webkit-transform: scale3d(1, 1, 1);\n          transform: scale3d(1, 1, 1); }\n\n.bg-resize-handle {\n  height: calc(100%);\n  position: absolute;\n  right: 7px;\n  top: 0;\n  cursor: ew-resize;\n  transition: all 200ms ease-out;\n  -webkit-transform: scale3d(1, 0, 0);\n          transform: scale3d(1, 0, 0);\n  border-right: solid 8px #ff5b77; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, ".card-block {\n  height: 260px;\n  overflow: auto; }\n\n.edit-row .bg-resize-handle {\n  -webkit-transform: scale3d(1, 1, 1);\n          transform: scale3d(1, 1, 1); }\n\n.bg-resize-handle {\n  height: calc(100% - 2px);\n  position: absolute;\n  right: 16px;\n  top: 1px;\n  cursor: ew-resize;\n  transition: all 200ms ease-out;\n  -webkit-transform: scale3d(1, 0, 0);\n          transform: scale3d(1, 0, 0);\n  border-radius: 0 3px 3px 0;\n  border-right: solid 15px #0275d8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"my-4\">\r\n  Bootgrid demo  {{innerWidth}} {{currentSize}}\r\n</h1>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-4\" exemplify=\"basicExample\" [context]=\"this\" [source]=\"'child'\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\r\n    name:'app.module.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/app.module.ts'\r\n  },{\r\n    name:'basic.component.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/basic/basic.component.ts'\r\n  },{\r\n    name:'basic.component.scss',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/basic/basic.component.scss'\r\n  }]\">\r\n  <button class=\"btn btn-secondary mb-4\" (click)=\"myGrid.editLayout()\">Edit layout</button>\r\n  <bootgrid #myGrid [items]=\"items\">\r\n    <ng-template let-item=\"item\">\r\n      <div class=\"basic-box\" [ngClass]=\"{'bg-handle':myGrid.edit}\">\r\n        <div class=\"row\">\r\n          <h3 class=\"col-12\">Item: {{item.order}}</h3>\r\n          <div class=\"col-6\">Size xs: {{item.xs}}</div><div class=\"col-6\">Order xs: {{item.xsOrder}}</div>\r\n          <div class=\"col-6\">Size sm: {{item.sm}}</div><div class=\"col-6\">Order sm: {{item.smOrder}}</div>\r\n          <div class=\"col-6\">Size md: {{item.md}}</div><div class=\"col-6\">Order md: {{item.mdOrder}}</div>\r\n          <div class=\"col-6\">Size lg: {{item.lg}}</div><div class=\"col-6\">Order lg: {{item.lgOrder}}</div>\r\n          <div class=\"col-6\">Size xl: {{item.xl}}</div><div class=\"col-6\">Order xl: {{item.xlOrder}}</div>\r\n        </div>\r\n        <button *ngIf=\"myGrid.edit\" class=\"btn btn-danger btn-sm float-right mt-3\" aria-label=\"Remove\" (click)=\"myGrid.deleteItem(item);\">Remove</button>\r\n      </div>\r\n    </ng-template>\r\n  </bootgrid>\r\n  <button *ngIf=\"myGrid.edit\" class=\"btn btn-secondary mb-4\" (click)=\"myGrid.addItem()\">Add content</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-4\" exemplify=\"basicExample\" [context]=\"this\" [source]=\"'child'\" [escapeStrings]=\"['insertedComponent','availableComponents']\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\r\n    name:'app.module.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/app.module.ts'\r\n  },{\r\n    name:'basic.component.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/card/card.component.ts'\r\n  },{\r\n    name:'basic.component.scss',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/card/card.component.scss'\r\n  }]\">\r\n  <button class=\"btn btn-secondary mb-4\" (click)=\"myGrid.editLayout()\">Edit layout</button>\r\n  <bootgrid #myGrid [items]=\"items\">\r\n    <ng-template let-item=\"item\" let-index=\"i\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" [ngClass]=\"{'bg-handle':myGrid.edit}\">\r\n          Item {{item.order + 1}} of {{myGrid.items.length}}\r\n          <button *ngIf=\"myGrid.edit\" type=\"button\" class=\"close float-right\" aria-label=\"Close\" (click)=\"myGrid.deleteItem(item);\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <form *ngIf=\"myGrid.edit\" class=\"form-inline mb-2\">\r\n            <label class=\"mr-2\"><strong>Size:</strong></label>\r\n            <span class=\"btn btn-secondary btn-sm mr-2\" (click)=\"myGrid.shrink(item,myGrid.items, item.order);\">Decrease -</span>\r\n            <span class=\"btn btn-secondary btn-sm\" (click)=\"myGrid.grow(item,myGrid.items, item.order)\">Increase +</span>\r\n          </form>\r\n          <div class=\"mb-2\"><strong>Item properties:</strong><br/>{{item | json}}</div>\r\n          <bg-content [insertedComponent]=\"item.componentSelector\" [availableComponents]=\"availableComponents\"></bg-content>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </bootgrid>\r\n  <button *ngIf=\"myGrid.edit\" class=\"btn btn-secondary mb-4\" (click)=\"myGrid.addItem()\">Add content</button>\r\n</div>\r\n"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav flex-column\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/basic\" routerLinkActive=\"active\">Basic</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/card\" routerLinkActive=\"active\">Card</a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<div [style.height]=\"height+'px'\" [style.background]=\"color\"></div>\r\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(368);


/***/ })

},[669]);
//# sourceMappingURL=main.bundle.js.map