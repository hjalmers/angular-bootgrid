webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_basic_component__ = __webpack_require__("../../../../../src/app/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_examples_component__ = __webpack_require__("../../../../../src/app/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fixed_sizes_fixed_sizes_component__ = __webpack_require__("../../../../../src/app/fixed-sizes/fixed-sizes.component.ts");
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
    { path: 'fixed-sizes', component: __WEBPACK_IMPORTED_MODULE_5__fixed_sizes_fixed_sizes_component__["a" /* FixedSizesComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__examples_examples_component__["a" /* ExamplesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"my-4\">\r\n  Bootgrid demo  {{innerWidth}} {{currentSize}}\r\n</h1>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".first {\n  /*background: cornflowerblue;*/ }\n\n.second {\n  background: mediumpurple; }\n\n.third {\n  background: darkturquoise; }\n\n.widget {\n  /*width:100%;*/ }\n\n.widget > div {\n  /*width:100%;*/\n  height: 40px;\n  background: magenta;\n  transition: width ease-in-out 500ms;\n  border: solid 1px; }\n\n.widget + .widget {\n  /*margin-top: 10px;*/ }\n\n.widgets {\n  padding: 1rem;\n  background: greenyellow; }\n\n.drop-area {\n  min-height: 40px; }\n\n.column-wrapper {\n  margin-left: -30px;\n  margin-right: -30px; }\n\n.row-controls {\n  position: absolute;\n  right: 0;\n  width: 20px; }\n\n.row-controls button {\n  float: left;\n  width: 20px;\n  height: 20px;\n  padding: 0; }\n\n.edit-column-max {\n  height: 100%;\n  width: 25%;\n  display: block;\n  top: 0;\n  right: 0; }\n\n.card-body {\n  height: 240px;\n  overflow: auto; }\n\n.bg-handle {\n  cursor: move; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        host: {
            '(window:resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__random_widget_random_widget_component__ = __webpack_require__("../../../../../src/app/random-widget/random-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_basic_component__ = __webpack_require__("../../../../../src/app/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bootgrid_bootgrid_module__ = __webpack_require__("../../../../../src/bootgrid/bootgrid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_examples_component__ = __webpack_require__("../../../../../src/app/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_exemplify__ = __webpack_require__("../../../../angular-exemplify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_exemplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_exemplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fixed_sizes_fixed_sizes_component__ = __webpack_require__("../../../../../src/app/fixed-sizes/fixed-sizes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__widget_table_widget_table_component__ = __webpack_require__("../../../../../src/app/widget-table/widget-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_generic_table_core__ = __webpack_require__("../../../../@angular-generic-table/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_generic_table_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__angular_generic_table_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_highcharts__ = __webpack_require__("../../../../highcharts/js/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_highcharts_dist_HighchartsService__ = __webpack_require__("../../../../angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__widget_chart_widget_chart_component__ = __webpack_require__("../../../../../src/app/widget-chart/widget-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function highchartsFactory() {
    return __WEBPACK_IMPORTED_MODULE_16_highcharts__;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__random_widget_random_widget_component__["a" /* RandomWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_6__basic_basic_component__["a" /* BasicComponent */],
            __WEBPACK_IMPORTED_MODULE_8__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__examples_examples_component__["a" /* ExamplesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__fixed_sizes_fixed_sizes_component__["a" /* FixedSizesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__widget_table_widget_table_component__["a" /* WidgetTableComponent */],
            __WEBPACK_IMPORTED_MODULE_18__widget_chart_widget_chart_component__["a" /* WidgetChartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__bootgrid_bootgrid_module__["a" /* BootgridModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_exemplify__["ExemplifyModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_generic_table_core__["GenericTableModule"],
            __WEBPACK_IMPORTED_MODULE_19_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_17_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory,
            }
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__random_widget_random_widget_component__["a" /* RandomWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_14__widget_table_widget_table_component__["a" /* WidgetTableComponent */],
            __WEBPACK_IMPORTED_MODULE_18__widget_chart_widget_chart_component__["a" /* WidgetChartComponent */]
        ],
        exports: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-4\" exemplify=\"basicExample\" [context]=\"this\" [source]=\"'child'\" [escapeStrings]=\"['ngClass']\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\r\n    name:'app.module.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/app.module.ts'\r\n  },{\r\n    name:'basic.component.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/basic/basic.component.ts'\r\n  },{\r\n    name:'basic.component.scss',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/basic/basic.component.scss'\r\n  }]\">\r\n  <button class=\"btn btn-secondary mb-4\" (click)=\"myGrid.editLayout()\">Edit layout</button>\r\n  <bootgrid #myGrid [items]=\"items\">\r\n    <ng-template let-item=\"item\">\r\n      <div class=\"basic-box\" [ngClass]=\"{'bg-handle':myGrid.edit}\">\r\n        <div class=\"row\">\r\n          <h3 class=\"col-12\">Item: {{item.startPosition}}</h3>\r\n          <div class=\"col-6\">Size xs: {{item.size}}</div><div class=\"col-6\">Order xs: {{item.position}}</div>\r\n          <div class=\"col-6\">Size sm: {{item.smSize}}</div><div class=\"col-6\">Order sm: {{item.smPosition}}</div>\r\n          <div class=\"col-6\">Size md: {{item.mdSize}}</div><div class=\"col-6\">Order md: {{item.mdPosition}}</div>\r\n          <div class=\"col-6\">Size lg: {{item.lgSize}}</div><div class=\"col-6\">Order lg: {{item.lgPosition}}</div>\r\n          <div class=\"col-6\">Size xl: {{item.xlSize}}</div><div class=\"col-6\">Order xl: {{item.xlPosition}}</div>\r\n        </div>\r\n        <button *ngIf=\"myGrid.edit\" class=\"btn btn-danger btn-sm float-right mt-3\" aria-label=\"Remove\" (click)=\"myGrid.deleteItem(item);\">Remove</button>\r\n      </div>\r\n    </ng-template>\r\n  </bootgrid>\r\n  <button *ngIf=\"myGrid.edit\" class=\"btn btn-secondary mb-4\" (click)=\"myGrid.addItem()\">Add content</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/basic/basic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".basic-box {\n  background: #6f42c1;\n  width: 100%;\n  height: 240px;\n  color: #ffffff;\n  padding: 1rem;\n  overflow: auto; }\n\n.edit-row .bg-resize-handle {\n  -webkit-transform: scale3d(1, 1, 1);\n          transform: scale3d(1, 1, 1); }\n\n.bg-resize-handle {\n  height: calc(100%);\n  position: absolute;\n  right: 7px;\n  top: 0;\n  cursor: ew-resize;\n  transition: all 200ms ease-out;\n  -webkit-transform: scale3d(1, 0, 0);\n          transform: scale3d(1, 0, 0);\n  border-right: solid 8px #e83e8c; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        /*public items = [{
          xlSize: 3,
          componentSelector: 'random-widget',
          extra: 'first',
          position: 0,
          xlPosition: 0,
          mdPosition: 0
        }, {
          xlSize: 3,
          componentSelector: 'random-widget',
          extra: 'second',
          position: 1,
          xlPosition: 1,
          mdPosition: 1
        }, {
          xlSize: 3,
          componentSelector: 'random-widget',
          extra: 'third',
          position: 2,
          xlPosition: 2,
          mdPosition: 2
        }, {
          xlSize: 3,
          componentSelector: 'random-widget',
          extra: 'forth',
          position: 3,
          xlPosition: 3,
          mdPosition: 3
        }];*/
        //public items = [];
        this.items = [{
                xlSize: 3,
                componentSelector: 'random-widget',
                extra: 'first',
                startPosition: 0,
                position: 0,
                mdPosition: 1
            }, {
                xlSize: 3,
                componentSelector: 'random-widget',
                extra: 'second',
                startPosition: 1,
                position: 1,
                mdPosition: 0
            }];
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    return BasicComponent;
}());
BasicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic',
        template: __webpack_require__("../../../../../src/app/basic/basic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/basic/basic.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], BasicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-4\" exemplify=\"basicExample\" [context]=\"this\" [source]=\"'child'\" [escapeStrings]=\"['ngClass','insertedComponent','availableComponents']\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\r\n    name:'app.module.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/app.module.ts'\r\n  },{\r\n    name:'basic.component.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/card/card.component.ts'\r\n  },{\r\n    name:'basic.component.scss',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular-bootgrid/master/src/app/card/card.component.scss'\r\n  }]\">\r\n  <button class=\"btn btn-secondary mb-4\" (click)=\"myGrid.editLayout()\">Edit layout</button>\r\n  <bootgrid #myGrid [items]=\"items\">\r\n    <ng-template let-item=\"item\" let-index=\"i\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" [ngClass]=\"{'bg-handle':myGrid.edit}\">\r\n          Item {{item.position + 1}} of {{myGrid.items.length}}\r\n          <button *ngIf=\"myGrid.edit\" type=\"button\" class=\"close float-right\" aria-label=\"Close\" (click)=\"myGrid.deleteItem(item);\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form *ngIf=\"myGrid.edit\" class=\"form-inline mb-2\">\r\n            <label class=\"mr-2\"><strong>Size:</strong></label>\r\n            <span class=\"btn btn-secondary btn-sm mr-2\" (click)=\"myGrid.shrink(item,myGrid.items, item.position);\">Decrease -</span>\r\n            <span class=\"btn btn-secondary btn-sm\" (click)=\"myGrid.grow(item,myGrid.items, item.position)\">Increase +</span>\r\n          </form>\r\n          <div class=\"mb-2\"><strong>Item properties:</strong><br/>{{item | json}}</div>\r\n          <bg-content [insertedComponent]=\"item.componentSelector\" [availableComponents]=\"availableComponents\"></bg-content>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </bootgrid>\r\n  <button *ngIf=\"myGrid.edit\" class=\"btn btn-secondary mb-4\" (click)=\"myGrid.addItem()\">Add content</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-body {\n  height: 260px;\n  overflow: auto; }\n\n.edit-row .bg-resize-handle {\n  -webkit-transform: scale3d(1, 1, 1);\n          transform: scale3d(1, 1, 1); }\n\n.bg-resize-handle {\n  height: calc(100% - 2px);\n  position: absolute;\n  right: 16px;\n  top: 1px;\n  cursor: ew-resize;\n  transition: all 200ms ease-out;\n  -webkit-transform: scale3d(1, 0, 0);\n          transform: scale3d(1, 0, 0);\n  border-radius: 0 3px 3px 0;\n  border-right: solid 15px #007bff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__random_widget_random_widget_component__ = __webpack_require__("../../../../../src/app/random-widget/random-widget.component.ts");
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
                xlSize: 3,
                componentSelector: 'random-widget',
                position: 0,
                xlPosition: 0,
                mdPosition: 0
            }, {
                xlSize: 3,
                componentSelector: 'random-widget',
                position: 1,
                xlPosition: 1,
                mdPosition: 1
            }, {
                xlSize: 3,
                componentSelector: 'random-widget',
                position: 2,
                xlPosition: 2,
                mdPosition: 2
            }, {
                xlSize: 3,
                componentSelector: 'random-widget',
                position: 3,
                xlPosition: 3,
                mdPosition: 3
            }];
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    return CardComponent;
}());
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card',
        template: __webpack_require__("../../../../../src/app/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/card/card.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], CardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav flex-column\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/basic\" routerLinkActive=\"active\">Basic</a>\r\n  </li>\r\n  <!--<li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/card\" routerLinkActive=\"active\">Card</a>\r\n  </li>-->\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/fixed-sizes\" routerLinkActive=\"active\">Fixed sizes</a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-examples',
        template: __webpack_require__("../../../../../src/app/examples/examples.component.html"),
        styles: [__webpack_require__("../../../../../src/app/examples/examples.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ExamplesComponent);

//# sourceMappingURL=examples.component.js.map

/***/ }),

/***/ "../../../../../src/app/fixed-sizes/fixed-sizes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div ngbDropdown class=\"d-inline-block\">\r\n      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Add widget</button>\r\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n        <button class=\"dropdown-item\" (click)=\"myGrid.addItem(items[0])\">Table</button>\r\n        <button class=\"dropdown-item\" (click)=\"myGrid.addItem(items[1])\">Chart</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<bootgrid #myGrid [items]=\"items\">\r\n  <ng-template let-item=\"item\">\r\n    <div class=\"card grid-item {{'grid-item-'+item.itemSize}} {{item.focused ? 'full-screen':''}}\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row no-gutters\">\r\n        <div class=\"col\"><h4 class=\"mb-0 bg-handle\" [ngClass]=\"{'nested': item.group}\">Widget size: {{item.itemSize}}</h4></div>\r\n        <div class=\"col-auto\" ngbDropdown [placement]=\"'bottom-right'\" *ngIf=\"!item.focused\">\r\n          <i ngbDropdownToggle class=\"fa fa-bars\"></i>\r\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n            <h6 class=\"dropdown-header\">Size</h6>\r\n            <!--<button class=\"dropdown-item\" [ngClass]=\"{'active':item.itemSize === 'sm'}\" (click)=\"myGrid.setSize(item, 'sm');\">Small</button>-->\r\n            <button class=\"dropdown-item\" [ngClass]=\"{'active':item.itemSize === 'md'}\" (click)=\"myGrid.setSize(item, 'md');\">Medium</button>\r\n            <button class=\"dropdown-item\" [ngClass]=\"{'active':item.itemSize === 'lg'}\" (click)=\"myGrid.setSize(item, 'lg');\">Large</button>\r\n            <button class=\"dropdown-item\" [ngClass]=\"{'active':item.itemSize === 'fs'}\" (click)=\"myGrid.toggleFocus(item);\">Full screen</button>\r\n            <h6 class=\"dropdown-header\">Other</h6>\r\n            <button class=\"dropdown-item\" (click)=\"myGrid.deleteItem(item);\">Remove</button>\r\n          </div>\r\n        </div>\r\n        <i class=\"fa fa-close\" *ngIf=\"item.focused\" (click)=\"myGrid.toggleFocus(item)\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <bg-content class=\"d-block\" [size]=\"item.itemSize\" [focus]=\"item.focused\" [item]=\"item\" [insertedComponent]=\"item.componentSelector\" [availableComponents]=\"availableComponents\"></bg-content>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</bootgrid>\r\n"

/***/ }),

/***/ "../../../../../src/app/fixed-sizes/fixed-sizes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-item {\n  height: 400px; }\n  .grid-item.grid-item-sm {\n    height: calc(200px - 1rem); }\n\n.full-screen {\n  width: 100%;\n  height: 100% !important;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0; }\n\n.card-body {\n  overflow: auto;\n  position: relative;\n  height: 100%; }\n\ni.fa.fa-bars.dropdown-toggle::after {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fixed-sizes/fixed-sizes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedSizesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_table_widget_table_component__ = __webpack_require__("../../../../../src/app/widget-table/widget-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_chart_widget_chart_component__ = __webpack_require__("../../../../../src/app/widget-chart/widget-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootgrid_components_bootgrid_component__ = __webpack_require__("../../../../../src/bootgrid/components/bootgrid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FixedSizesComponent = (function () {
    function FixedSizesComponent() {
        this.availableComponents = [
            {
                component: __WEBPACK_IMPORTED_MODULE_1__widget_table_widget_table_component__["a" /* WidgetTableComponent */],
                selector: 'widget-table'
            }, {
                component: __WEBPACK_IMPORTED_MODULE_2__widget_chart_widget_chart_component__["a" /* WidgetChartComponent */],
                selector: 'widget-chart'
            }
        ];
        this.items = [{
                componentSelector: 'widget-table',
                extra: 'first',
                startPosition: 0,
                itemSize: 'md'
            }, {
                componentSelector: 'widget-chart',
                extra: 'second',
                startPosition: 1,
                itemSize: 'md'
            }];
    }
    FixedSizesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items.map(function (item) {
            _this.myGrid.setSize(item, item.itemSize);
        });
    };
    return FixedSizesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__bootgrid_components_bootgrid_component__["a" /* BootgridComponent */]),
    __metadata("design:type", Object)
], FixedSizesComponent.prototype, "myGrid", void 0);
FixedSizesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fixed-sizes',
        template: __webpack_require__("../../../../../src/app/fixed-sizes/fixed-sizes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fixed-sizes/fixed-sizes.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FixedSizesComponent);

//# sourceMappingURL=fixed-sizes.component.js.map

/***/ }),

/***/ "../../../../../src/app/random-widget/random-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/random-widget/random-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.height]=\"height+'px'\" [style.background]=\"color\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/random-widget/random-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'random-widget',
        template: __webpack_require__("../../../../../src/app/random-widget/random-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/random-widget/random-widget.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RandomWidgetComponent);

//# sourceMappingURL=random-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/widget-chart/widget-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<chart class=\"d-block\" [options]=\"options\" (load)=\"saveInstance($event.context)\"></chart>\r\n"

/***/ }),

/***/ "../../../../../src/app/widget-chart/widget-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widget-chart/widget-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootgrid_components_bg_item__ = __webpack_require__("../../../../../src/bootgrid/components/bg-item.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetChartComponent = (function (_super) {
    __extends(WidgetChartComponent, _super);
    function WidgetChartComponent() {
        var _this = _super.call(this) || this;
        console.log('new chart');
        return _this;
    }
    WidgetChartComponent.prototype.saveInstance = function (chartInstance) {
        var _this = this;
        this.chart = chartInstance;
        // subscribe to size changes
        this.size.subscribe(function (size) {
            _this.reflowChart();
        });
        // subscribe to focus mode
        this.focus.subscribe(function (focus) {
            _this.reflowChart();
        });
    };
    WidgetChartComponent.prototype.ngOnInit = function () {
        this.options = {
            title: { text: 'simple column chart' },
            chart: {
                type: 'column'
            },
            credits: false,
            plotOptions: {
                line: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                    data: [29.9, 71.5, 106.4, 129],
                }, {
                    type: 'column',
                    data: [21.9, 51.4, 89.1, 53.2],
                }, {
                    data: [12.5, 73.2, 74.4, 80],
                }, {
                    type: 'column',
                    data: [42.5, 21.2, 87.4, 27],
                }]
        };
    };
    WidgetChartComponent.prototype.reflowChart = function () {
        var _this = this;
        setTimeout(function () { return _this.chart.reflow(); }, 0);
    };
    return WidgetChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bootgrid_components_bg_item__["a" /* BgItem */]));
WidgetChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-widget-chart',
        template: __webpack_require__("../../../../../src/app/widget-chart/widget-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widget-chart/widget-chart.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChartComponent);

//# sourceMappingURL=widget-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/widget-table/widget-table.component.html":
/***/ (function(module, exports) {

module.exports = "<generic-table [gtClasses]=\"'table-sm'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [(gtData)]=\"configObject.data\" [gtOptions]=\"{numberOfRows:20}\"></generic-table>\r\n<div class=\"text-center\">\r\n    <small><gt-table-info class=\"form-text text-muted mb-2\" [genericTable]=\"myTable\"></gt-table-info></small>\r\n    <gt-pagination [gtClasses]=\"'pagination-sm justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/widget-table/widget-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widget-table/widget-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootgrid_components_bg_item__ = __webpack_require__("../../../../../src/bootgrid/components/bg-item.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetTableComponent = (function (_super) {
    __extends(WidgetTableComponent, _super);
    function WidgetTableComponent() {
        var _this = _super.call(this) || this;
        console.log('new table');
        return _this;
    }
    WidgetTableComponent.prototype.ngOnInit = function () {
        // configure boot grid item to adjust automatically (requires specific css).
        this.configureItem('autoHeight', true);
        this.configObject = {
            settings: [{
                    objectKey: 'id',
                    sort: 'asc',
                    sortOrder: 1,
                    columnOrder: 0
                }, {
                    objectKey: 'name',
                    sort: 'asc',
                    sortOrder: 0,
                    columnOrder: 1
                }, {
                    objectKey: 'lucky_number',
                    sort: 'enable',
                    columnOrder: 2,
                    visible: true
                }],
            fields: [{
                    name: 'Id',
                    objectKey: 'id'
                }, {
                    name: 'Name',
                    objectKey: 'name'
                }, {
                    name: 'Lucky number',
                    objectKey: 'lucky_number',
                    stackedHeading: 'Custom heading'
                }],
            data: [{
                    'id': 1,
                    'name': 'Anna',
                    'lucky_number': 63
                }, {
                    'id': 2,
                    'name': 'Julie',
                    'lucky_number': 8
                }, {
                    'id': 3,
                    'name': 'Lillian',
                    'lucky_number': 30
                }, {
                    'id': 4,
                    'name': 'Norma',
                    'lucky_number': 13
                }, {
                    'id': 5,
                    'name': 'Ralph',
                    'lucky_number': 28
                }, {
                    'id': 6,
                    'name': 'Benjamin',
                    'lucky_number': 66
                }, {
                    'id': 7,
                    'name': 'George',
                    'lucky_number': 66
                }, {
                    'id': 8,
                    'name': 'Ryan',
                    'lucky_number': 65
                }, {
                    'id': 9,
                    'name': 'Martha',
                    'lucky_number': 57
                }, {
                    'id': 10,
                    'name': 'Todd',
                    'lucky_number': 65
                }, {
                    'id': 11,
                    'name': 'Norma',
                    'lucky_number': 73
                }, {
                    'id': 12,
                    'name': 'Frank',
                    'lucky_number': 27
                }, {
                    'id': 13,
                    'name': 'Kathryn',
                    'lucky_number': 93
                }, {
                    'id': 14,
                    'name': 'Philip',
                    'lucky_number': 63
                }, {
                    'id': 15,
                    'name': 'Ronald',
                    'lucky_number': 89
                }, {
                    'id': 16,
                    'name': 'Joshua',
                    'lucky_number': 18
                }, {
                    'id': 17,
                    'name': 'Phillip',
                    'lucky_number': 16
                }, {
                    'id': 18,
                    'name': 'Susan',
                    'lucky_number': 6
                }, {
                    'id': 19,
                    'name': 'Louise',
                    'lucky_number': 52
                }, {
                    'id': 20,
                    'name': 'Gary',
                    'lucky_number': 18
                }, {
                    'id': 21,
                    'name': 'Laura',
                    'lucky_number': 9
                }, {
                    'id': 22,
                    'name': 'Tina',
                    'lucky_number': 70
                }, {
                    'id': 23,
                    'name': 'Jesse',
                    'lucky_number': 2
                }, {
                    'id': 24,
                    'name': 'Jessica',
                    'lucky_number': 15
                }, {
                    'id': 25,
                    'name': 'Scott',
                    'lucky_number': 38
                }, {
                    'id': 26,
                    'name': 'Michael',
                    'lucky_number': 23
                }, {
                    'id': 27,
                    'name': 'Harold',
                    'lucky_number': 66
                }, {
                    'id': 28,
                    'name': 'William',
                    'lucky_number': 57
                }, {
                    'id': 29,
                    'name': 'Harry',
                    'lucky_number': 14
                }, {
                    'id': 30,
                    'name': 'Dennis',
                    'lucky_number': 9
                }, {
                    'id': 31,
                    'name': 'Sara',
                    'lucky_number': 9
                }, {
                    'id': 32,
                    'name': 'David',
                    'lucky_number': 31
                }, {
                    'id': 33,
                    'name': 'Antonio',
                    'lucky_number': 2
                }, {
                    'id': 34,
                    'name': 'Anna',
                    'lucky_number': 85
                }, {
                    'id': 35,
                    'name': 'Earl',
                    'lucky_number': 98
                }, {
                    'id': 36,
                    'name': 'Melissa',
                    'lucky_number': 70
                }, {
                    'id': 37,
                    'name': 'Eric',
                    'lucky_number': 94
                }, {
                    'id': 38,
                    'name': 'Joe',
                    'lucky_number': 42
                }, {
                    'id': 39,
                    'name': 'Andrea',
                    'lucky_number': 39
                }, {
                    'id': 40,
                    'name': 'Michael',
                    'lucky_number': 44
                }, {
                    'id': 41,
                    'name': 'Lillian',
                    'lucky_number': 10
                }, {
                    'id': 42,
                    'name': 'Elizabeth',
                    'lucky_number': 24
                }, {
                    'id': 43,
                    'name': 'Ryan',
                    'lucky_number': 78
                }, {
                    'id': 44,
                    'name': 'Phillip',
                    'lucky_number': 86
                }, {
                    'id': 45,
                    'name': 'Patrick',
                    'lucky_number': 64
                }, {
                    'id': 46,
                    'name': 'Barbara',
                    'lucky_number': 54
                }, {
                    'id': 47,
                    'name': 'Patricia',
                    'lucky_number': 9
                }, {
                    'id': 48,
                    'name': 'Brenda',
                    'lucky_number': 18
                }, {
                    'id': 49,
                    'name': 'Sara',
                    'lucky_number': 12
                }, {
                    'id': 50,
                    'name': 'Steven',
                    'lucky_number': 50
                }, {
                    'id': 51,
                    'name': 'Steven',
                    'lucky_number': 44
                }, {
                    'id': 52,
                    'name': 'Paul',
                    'lucky_number': 88
                }, {
                    'id': 53,
                    'name': 'Ann',
                    'lucky_number': 51
                }, {
                    'id': 54,
                    'name': 'Frank',
                    'lucky_number': 3
                }, {
                    'id': 55,
                    'name': 'Beverly',
                    'lucky_number': 10
                }, {
                    'id': 56,
                    'name': 'Elizabeth',
                    'lucky_number': 52
                }, {
                    'id': 57,
                    'name': 'Patrick',
                    'lucky_number': 96
                }, {
                    'id': 58,
                    'name': 'Susan',
                    'lucky_number': 92
                }, {
                    'id': 59,
                    'name': 'Lawrence',
                    'lucky_number': 53
                }, {
                    'id': 60,
                    'name': 'Denise',
                    'lucky_number': 65
                }, {
                    'id': 61,
                    'name': 'Carol',
                    'lucky_number': 33
                }, {
                    'id': 62,
                    'name': 'Larry',
                    'lucky_number': 95
                }, {
                    'id': 63,
                    'name': 'Martha',
                    'lucky_number': 32
                }, {
                    'id': 64,
                    'name': 'Steve',
                    'lucky_number': 69
                }, {
                    'id': 65,
                    'name': 'Timothy',
                    'lucky_number': 16
                }, {
                    'id': 66,
                    'name': 'Jose',
                    'lucky_number': 16
                }, {
                    'id': 67,
                    'name': 'Jennifer',
                    'lucky_number': 96
                }, {
                    'id': 68,
                    'name': 'Benjamin',
                    'lucky_number': 20
                }, {
                    'id': 69,
                    'name': 'Christine',
                    'lucky_number': 8
                }, {
                    'id': 70,
                    'name': 'Timothy',
                    'lucky_number': 93
                }, {
                    'id': 71,
                    'name': 'Patricia',
                    'lucky_number': 17
                }, {
                    'id': 72,
                    'name': 'Craig',
                    'lucky_number': 48
                }, {
                    'id': 73,
                    'name': 'Philip',
                    'lucky_number': 88
                }, {
                    'id': 74,
                    'name': 'Lori',
                    'lucky_number': 56
                }, {
                    'id': 75,
                    'name': 'Janet',
                    'lucky_number': 4
                }, {
                    'id': 76,
                    'name': 'Denise',
                    'lucky_number': 30
                }, {
                    'id': 77,
                    'name': 'Elizabeth',
                    'lucky_number': 44
                }, {
                    'id': 78,
                    'name': 'Thomas',
                    'lucky_number': 95
                }, {
                    'id': 79,
                    'name': 'Shirley',
                    'lucky_number': 24
                }, {
                    'id': 80,
                    'name': 'Helen',
                    'lucky_number': 9
                }, {
                    'id': 81,
                    'name': 'Wanda',
                    'lucky_number': 98
                }, {
                    'id': 82,
                    'name': 'Ernest',
                    'lucky_number': 35
                }, {
                    'id': 83,
                    'name': 'Steven',
                    'lucky_number': 9
                }, {
                    'id': 84,
                    'name': 'Jose',
                    'lucky_number': 27
                }, {
                    'id': 85,
                    'name': 'Kimberly',
                    'lucky_number': 52
                }, {
                    'id': 86,
                    'name': 'Nancy',
                    'lucky_number': 48
                }, {
                    'id': 87,
                    'name': 'Christopher',
                    'lucky_number': 44
                }, {
                    'id': 88,
                    'name': 'Nancy',
                    'lucky_number': 40
                }, {
                    'id': 89,
                    'name': 'Philip',
                    'lucky_number': 34
                }, {
                    'id': 90,
                    'name': 'Bruce',
                    'lucky_number': 69
                }, {
                    'id': 91,
                    'name': 'Jason',
                    'lucky_number': 60
                }, {
                    'id': 92,
                    'name': 'Denise',
                    'lucky_number': 30
                }, {
                    'id': 93,
                    'name': 'Jane',
                    'lucky_number': 66
                }, {
                    'id': 94,
                    'name': 'Brian',
                    'lucky_number': 49
                }, {
                    'id': 95,
                    'name': 'Eugene',
                    'lucky_number': 51
                }, {
                    'id': 96,
                    'name': 'Jack',
                    'lucky_number': 97
                }, {
                    'id': 97,
                    'name': 'Peter',
                    'lucky_number': 1
                }, {
                    'id': 98,
                    'name': 'Virginia',
                    'lucky_number': 20
                }, {
                    'id': 99,
                    'name': 'Walter',
                    'lucky_number': 63
                }, {
                    'id': 100,
                    'name': 'Virginia',
                    'lucky_number': 14
                }]
        };
    };
    return WidgetTableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bootgrid_components_bg_item__["a" /* BgItem */]));
WidgetTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-widget-table',
        template: __webpack_require__("../../../../../src/app/widget-table/widget-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widget-table/widget-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WidgetTableComponent);

//# sourceMappingURL=widget-table.component.js.map

/***/ }),

/***/ "../../../../../src/bootgrid/bootgrid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootgridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_bootgrid_component__ = __webpack_require__("../../../../../src/bootgrid/components/bootgrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_resizable_element__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_bg_content_component__ = __webpack_require__("../../../../../src/bootgrid/components/bg-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_group_items_pipe__ = __webpack_require__("../../../../../src/bootgrid/pipes/group-items.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_group_width_directive__ = __webpack_require__("../../../../../src/bootgrid/directives/group-width.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_bg_nested_bg_nested_component__ = __webpack_require__("../../../../../src/bootgrid/components/bg-nested/bg-nested.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular_resizable_element__["a" /* ResizableModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_bootgrid_component__["a" /* BootgridComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_bg_content_component__["a" /* BgContentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_group_items_pipe__["a" /* GroupItemsPipe */],
            __WEBPACK_IMPORTED_MODULE_7__directives_group_width_directive__["a" /* GroupWidthDirective */],
            __WEBPACK_IMPORTED_MODULE_8__components_bg_nested_bg_nested_component__["a" /* BgNestedComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__components_bootgrid_component__["a" /* BootgridComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_bg_content_component__["a" /* BgContentComponent */]
        ]
    })
], BootgridModule);

//# sourceMappingURL=bootgrid.module.js.map

/***/ }),

/***/ "../../../../../src/bootgrid/components/bg-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_bootgrid_item__ = __webpack_require__("../../../../../src/bootgrid/interfaces/bootgrid-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_bootgrid_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces_bootgrid_item__);
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
        this.getComponent = function () {
            for (var i = 0; i < this.availableComponents.length; i++) {
                //console.log(this.availableComponents[i]);
                if (this.availableComponents[i].selector === this.insertedComponent) {
                    //console.log('match');
                    return this.availableComponents[i].component;
                }
            }
        };
    }
    Object.defineProperty(BgContentComponent.prototype, "size", {
        set: function (value) {
            if (!this._size) {
                this._size = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](value);
            }
            else {
                this._size.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BgContentComponent.prototype, "focus", {
        set: function (value) {
            if (!this._focus) {
                this._focus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](value);
            }
            else {
                this._focus.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BgContentComponent.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    BgContentComponent.prototype.ngOnChanges = function (changes) {
        if (changes['insertedComponent']) {
            var insertedComponent = changes.insertedComponent;
            if (insertedComponent.currentValue) {
                this.renderComponent();
            }
        }
    };
    BgContentComponent.prototype.renderComponent = function () {
        //console.log(this.insertedComponent);
        // If we don't want to hold a reference to the component type, we can also say:
        //this.viewContainerRef.clear();
        //this.renderer.createElement(this.el.nativeElement,'app-random-widget');
        //componentRef.changeDetectorRef.detectChanges();
        var comp = this.getComponent();
        //console.log(comp);
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
        this.viewContainerRef.clear();
        var componentRef = this.viewContainerRef.createComponent(componentFactory);
        componentRef.instance['size'] = this._size.asObservable();
        componentRef.instance['focus'] = this._focus.asObservable();
        componentRef.instance['item'] = this._item;
        componentRef.changeDetectorRef.detectChanges();
        //console.log(comp, componentFactory, componentRef);
    };
    return BgContentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BgContentComponent.prototype, "size", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], BgContentComponent.prototype, "focus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces_bootgrid_item__["BootgridItem"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces_bootgrid_item__["BootgridItem"]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces_bootgrid_item__["BootgridItem"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces_bootgrid_item__["BootgridItem"]) === "function" && _b || Object])
], BgContentComponent.prototype, "item", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _c || Object)
], BgContentComponent.prototype, "insertedComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BgContentComponent.prototype, "availableComponents", void 0);
BgContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bg-content',
        template: '<!--<b>Inserted Component:</b>-->'
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _g || Object])
], BgContentComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=bg-content.component.js.map

/***/ }),

/***/ "../../../../../src/bootgrid/components/bg-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgItem; });
var BgItem = (function () {
    function BgItem() {
    }
    BgItem.prototype.configureItem = function (property, value) {
        var _this = this;
        // trigger a reflow using timeout, maybe we can come up with something better...
        setTimeout(function () { return _this.item[property] = value; }, 0);
    };
    return BgItem;
}());

//# sourceMappingURL=bg-item.js.map

/***/ }),

/***/ "../../../../../src/bootgrid/components/bg-nested/bg-nested.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgNestedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BgNestedComponent = (function () {
    function BgNestedComponent(renderer, hostElement, dragulaService) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.dragulaService = dragulaService;
        //console.log('new');
    }
    Object.defineProperty(BgNestedComponent.prototype, "t", {
        get: function () {
            return this._t;
        },
        set: function (value) {
            //console.log(value);
            this.checkSize();
            this._t = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BgNestedComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            //console.log('testsetset');
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    BgNestedComponent.prototype.ngOnInit = function () {
        //this.checkSize();
        /*this.dragulaService.setOptions('test', {
            moves: function (el, container, handle) {
              console.log('test', el,container);
                function findAncestor (el, cls) {
                    while ((el = el.parentElement) && !el.classList.contains(cls)) {}
                    return el;
                }
                const ANCESTOR = findAncestor(handle, 'temp');
                return true //!(handle instanceof SVGElement) && (handle.className.indexOf('temp') !== -1 || ANCESTOR && ANCESTOR.className.indexOf('temp') !== -1);
            }
        });*/
    };
    BgNestedComponent.prototype.checkSize = function () {
        var PARENT_WIDTH = window.getComputedStyle(this.hostElement.nativeElement.parentElement, null).getPropertyValue("width");
        var WIDTH = window.getComputedStyle(this.hostElement.nativeElement, null).getPropertyValue("width");
        if (parseFloat(WIDTH) >= parseFloat(PARENT_WIDTH)) {
            //this.renderer.addClass(this.hostElement.nativeElement, 'full');
            this.size = 'full';
        }
        else {
            this.size = 'half';
            //this.renderer.addClass(this.hostElement.nativeElement, 'half');
        }
    };
    BgNestedComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy(this.bagId + '-child');
    };
    return BgNestedComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], BgNestedComponent.prototype, "t", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], BgNestedComponent.prototype, "items", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BgNestedComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BgNestedComponent.prototype, "bagId", void 0);
BgNestedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bg-nested',
        template: "\n        <div class=\"row nested\" [ngClass]=\"size\" [dragula]=\"bagId+'-child'\">\n            <!--<div *ngFor=\"let item of item.items; let i = index;\" [attr.data-grid-item-id]=\"item.id\" ngClass=\"{{'grid-item-'+item.itemSize}} {{'col-' + (!item.size ? 12:item.size)}} {{!item.smSize ? '':'col-sm-'+(item.smSize*2 > 12 ? 12: item.smSize*2) }} {{!item.mdSize ? '':'col-md-'+(item.mdSize*2 > 12 ? 12:item.mdSize*2)}} {{!item.lgSize ? '':'col-lg-'+(item.lgSize*2 > 12 ? 12:item.lgSize*2)}} {{!item.xlSize ? '':'col-xl-'+(item.xlSize*2 > 12 ? 12:item.xlSize*2)}} {{edit ? 'edit-column':''}}\" mwlResizable -->\n            <div *ngFor=\"let item of items; let i = index;\" [attr.data-grid-item-id]=\"item.id\" ngClass=\"{{item.grouped ? 'my-3':''}} {{'grid-item-'+item.itemSize}} {{'col-' + item.size}} {{!item.smSize ? '':'col-sm-'+item.smSize }} {{!item.mdSize ? '':'col-md-'+item.mdSize}} {{!item.lgSize ? '':'col-lg-'+item.lgSize}} {{!item.xlSize ? '':'col-xl-'+item.xlSize}} {{edit ? 'edit-column':''}}\" mwlResizable\n                 (resizing)=\"onResize($event,item)\">\n                <ng-template [ngTemplateOutlet]=\"template\" [ngOutletContext]=\"{item: item}\"></ng-template>\n                <div class=\"bg-resize-handle\" mwlResizeHandle [resizeEdges]=\"{right: true}\"></div>\n            </div>\n        </div>\n    ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]) === "function" && _c || Object])
], BgNestedComponent);

var _a, _b, _c;
//# sourceMappingURL=bg-nested.component.js.map

/***/ }),

/***/ "../../../../../src/bootgrid/components/bootgrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootgridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
        this.dragulaService = dragulaService;
        this.cdr = cdr;
        this.items = [];
        this.innerWidth = window.innerWidth;
        this.positionProperties = ['xlPosition', 'lgPosition', 'mdPosition', 'smPosition', 'position'];
        this.sizeRules = {
            sm: {
                size: 12,
                smSize: 6,
                mdSize: 3,
                group: true,
                fs: false
            },
            md: {
                size: 12,
                smSize: 12,
                mdSize: 6,
                group: false,
                fs: false
            },
            lg: {
                size: 12,
                smSize: 12,
                mdSize: 12,
                group: false,
                fs: false
            }
        };
        this.edit = false;
        this.editLayout = function () {
            this.edit = !this.edit;
        };
        this.addItem = function (item) {
            if (item) {
                item = __assign({}, item);
                item.position = this.items.length;
                item.id = this.generateId();
                this.items.push(item);
            }
            else {
                this.items.push({
                    xlSize: 4,
                    componentSelector: 'random-widget',
                    startPosition: this.items.length,
                    position: this.items.length,
                    // smPosition:this.items.length,
                    // mdPosition:this.items.length,
                    // lgPosition:this.items.length,
                    // xlPosition:this.items.length,
                    id: this.generateId()
                });
            }
            this.items = this.items.slice();
            this.items.sort(this.getPositionForSize(this.currentSize, this.items));
        };
        this.deleteItem = function (item) {
            for (var i = 0; i < this.items.length; i++) {
                if (item.id && this.items[i].id === item.id) {
                    this.items.splice(i, 1);
                }
            }
            this.items = this.items.slice();
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
        this.updatePosition = function (newPosition, movedItem, size) {
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
            this.items.sort(this.getPositionForSize(this.currentSize, this.items));
            this.items = this.items.slice();
        };
        this.getGridItemById = function (id) {
            //console.log(id,this.items);
            for (var i = 0; i < this.items.length; i++) {
                //console.log(this.items[i].order);
                if (this.items[i].id === id) {
                    //console.log('yeah');
                    return this.items[i];
                }
            }
        };
    }
    BootgridComponent.prototype.onResize = function (event, item) {
        //console.log('Element was resized', event, Math.round((event.rectangle.width/this.innerWidth)*12));
        var proposedWidth = Math.round((event.rectangle.width / this.innerWidth) * 12);
        var SIZE = this.currentSize === 'xs' ? 'size' : this.currentSize + 'Size';
        if (proposedWidth < 13) {
            item[SIZE] = proposedWidth;
        }
    };
    BootgridComponent.prototype.resize = function () {
        this.items = this.items.slice();
    };
    BootgridComponent.prototype.setSize = function (item, size) {
        //const ITEM_TO_UPDATE = {...item};
        item.itemSize = size;
        var RULES = this.sizeRules[size];
        Object.keys(RULES).map(function (key) {
            item[key] = RULES[key];
        });
        item = __assign({}, item);
        this.items = this.items.slice();
    };
    BootgridComponent.prototype.toggleFocus = function (item) {
        item.focused = !item.focused;
        item = __assign({}, item);
        this.items = this.items.slice();
    };
    BootgridComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        //console.log(e, el);
        /*if(el.classList && el.classList.contains('nested')){
          // TODO: what to do if nested
          return
        }*/
        var index = this.getElementIndex(e);
        //let item = this.items[index];
        var sizePosition = this.currentSize === 'xs' ? 'position' : this.currentSize + 'Position';
        //const startPos = e.getAttribute('data-org-index');
        //console.log(e);
        var id = e.getAttribute('data-grid-item-id');
        //console.log(id);
        var endPos = index;
        //console.log(endPos,e.getAttribute('data-index'));
        var gridItem = this.getGridItemById(id);
        //console.log(gridItem);
        //console.log(endPos,gridItem[sizePosition])
        this.updatePosition(endPos, gridItem, sizePosition);
        //this.items[startPos][sizePosition] = endPos;
        //console.log(e.getAttribute('data-index'),e.getAttribute('data-org-index'),index, item)
    };
    BootgridComponent.prototype.getElementIndex = function (el) {
        //console.log(el,el.children);
        //console.log('index',[].slice.call(el.children).indexOf(el.children[1]));
        return [].slice.call(el.parentElement.children).indexOf(el);
    };
    BootgridComponent.prototype.ngOnInit = function () {
        var _this = this;
        var getWindow = function () {
            return window.innerWidth;
        };
        this.innerWidth = getWindow();
        this.currentSize = this.getCurrentSize();
        this.bagId = this.generateId();
        window.onresize = function () {
            _this.innerWidth = getWindow();
            _this.currentSize = _this.getCurrentSize();
            _this.items.sort(_this.getPositionForSize(_this.currentSize, _this.items));
            _this.cdr.detectChanges(); //running change detection manually
        };
        this.dragulaService.setOptions(this.bagId, {
            moves: function (el, container, handle) {
                function findAncestor(el, cls) {
                    while ((el = el.parentElement) && !el.classList.contains(cls)) { }
                    return el;
                }
                // experiment for moving nested elements
                /*if (handle.classList) {
                    return !handle.classList.contains('nested');
                }*/
                var ANCESTOR = findAncestor(handle, 'bg-handle');
                return !(handle instanceof SVGElement) && (handle.className.indexOf('bg-handle') !== -1 || ANCESTOR && ANCESTOR.className.indexOf('bg-handle') !== -1);
            }
        });
        this.dragulaService.drop.subscribe(function (value) {
            //console.log(value);
            _this.onDrop(value.slice(1));
        });
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
    BootgridComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy(this.bagId);
    };
    BootgridComponent.prototype.getPositionForSize = function (size, items) {
        var positionProperty = size === 'xs' ? 'position' : size + 'Position';
        // TODO: write recursive function
        if (!this.isPositionDefined(items, positionProperty)) {
            positionProperty = this.positionProperties[this.positionProperties.indexOf(positionProperty) + 1];
            if (!this.isPositionDefined(items, positionProperty)) {
                positionProperty = this.positionProperties[this.positionProperties.indexOf(positionProperty) + 1];
                if (!this.isPositionDefined(items, positionProperty)) {
                    positionProperty = this.positionProperties[this.positionProperties.indexOf(positionProperty) + 1];
                    if (!this.isPositionDefined(items, positionProperty)) {
                        positionProperty = this.positionProperties[this.positionProperties.indexOf(positionProperty) + 1];
                    }
                }
            }
        }
        return function (a, b) {
            if (a[positionProperty] < b[positionProperty])
                return -1;
            if (a[positionProperty] > b[positionProperty])
                return 1;
            return 0;
        };
    };
    ;
    BootgridComponent.prototype.isPositionDefined = function (items, positionProperty) {
        return items
            .map(function (item) { return item; })
            .filter(function (item) { return typeof item[positionProperty] !== 'undefined'; }).length > 0;
    };
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], BootgridComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BootgridComponent.prototype, "items", void 0);
BootgridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bootgrid',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "<div class=\"column-wrapper row\" ngClass=\"{{edit ? 'edit-row':''}}\" [dragula]=\"bagId\">\n        <ng-container *ngFor=\"let item of items | groupItems; let i = index;\">\n            <div *ngIf=\"!item.grouped\" class=\"my-3\" [attr.data-grid-item-id]=\"item.id\" ngClass=\"{{'col-' + (!item.size ? 12:item.size)}} {{!item.smSize ? '':'col-sm-'+item.smSize}} {{!item.mdSize ? '':'col-md-'+item.mdSize}} {{!item.lgSize ? '':'col-lg-'+item.lgSize}} {{!item.xlSize ? '':'col-xl-'+item.xlSize}} {{item.autoHeight ? 'auto-height':''}} {{edit ? 'edit-column':''}}\" mwlResizable\n                 (resizing)=\"onResize($event,item)\">\n                <ng-template [ngTemplateOutlet]=\"template\" [ngOutletContext]=\"{\n        item: item\n      }\">\n                </ng-template>\n                <div class=\"bg-resize-handle\" mwlResizeHandle [resizeEdges]=\"{right: true}\"></div>\n            </div>\n            <bg-nested class=\"my-3 col-12 col-sm\" *ngIf=\"item.grouped && item.items.length > 1\" [items]=\"item.items\" [template]=\"template\" [bagId]=\"bagId\" [t]=\"items.length\"></bg-nested>\n            <!--<div *ngIf=\"item.grouped && item.items.length > 1\" class=\"my-3 col-12 col-sm\" appGroupWidth>\n                <div class=\"row nested\">\n              <div *ngFor=\"let item of item.items; let i = index;\" [attr.data-grid-item-id]=\"item.id\" ngClass=\"{{'grid-item-'+item.itemSize}} {{'col-' + item.size}} {{!item.smSize ? '':'col-sm-'+item.smSize }} {{!item.mdSize ? '':'col-md-'+item.mdSize}} {{!item.lgSize ? '':'col-lg-'+item.lgSize}} {{!item.xlSize ? '':'col-xl-'+item.xlSize}} {{edit ? 'edit-column':''}}\" mwlResizable\n                   (resizing)=\"onResize($event,item)\">\n                  <ng-template [ngTemplateOutlet]=\"template\" [ngOutletContext]=\"{\n              item: item\n            }\">\n                  </ng-template>\n                  <div class=\"bg-resize-handle\" mwlResizeHandle [resizeEdges]=\"{right: true}\"></div>\n              </div>\n        </div>\n        </div>\n            -->\n            <!--<div *ngIf=\"item.grouped && item.items.length === 1\" class=\"mb-4\" [attr.data-grid-item-id]=\"item.id\" ngClass=\"{{'col-' + (!item.items[0].size ? 12:item.items[0].size)}} {{!item.items[0].smSize ? '':'col-sm-'+item.items[0].smSize}} {{!item.items[0].mdSize ? '':'col-md-'+item.items[0].mdSize}} {{!item.items[0].lgSize ? '':'col-lg-'+item.items[0].lgSize}} {{!item.items[0].xlSize ? '':'col-xl-'+item.items[0].xlSize}} {{edit ? 'edit-column':''}}\" mwlResizable\n               (resizing)=\"onResize($event,item)\">\n            <ng-template [ngTemplateOutlet]=\"template\" [ngOutletContext]=\"{\n            item: item.items[0]\n          }\">\n            </ng-template>\n            {{item.group}}\n            <div class=\"bg-resize-handle\" mwlResizeHandle [resizeEdges]=\"{right: true}\"></div>\n          </div>-->\n        </ng-container>\n    </div>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], BootgridComponent);

var _a, _b, _c;
//# sourceMappingURL=bootgrid.component.js.map

/***/ }),

/***/ "../../../../../src/bootgrid/directives/group-width.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupWidthDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupWidthDirective = (function () {
    function GroupWidthDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    GroupWidthDirective.prototype.ngOnInit = function () {
        this.checkSize();
    };
    GroupWidthDirective.prototype.onResize = function ($event) {
        this.checkSize();
    };
    GroupWidthDirective.prototype.checkSize = function () {
        var PARENT_WIDTH = window.getComputedStyle(this.hostElement.nativeElement.parentElement, null).getPropertyValue("width");
        var WIDTH = window.getComputedStyle(this.hostElement.nativeElement, null).getPropertyValue("width");
        if (parseFloat(WIDTH) >= parseFloat(PARENT_WIDTH)) {
            this.renderer.addClass(this.hostElement.nativeElement, 'full');
        }
        else {
            this.renderer.addClass(this.hostElement.nativeElement, 'half');
        }
    };
    return GroupWidthDirective;
}());
GroupWidthDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appGroupWidth]',
        host: {
            '(window:resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], GroupWidthDirective);

var _a, _b;
//# sourceMappingURL=group-width.directive.js.map

/***/ }),

/***/ "../../../../../src/bootgrid/interfaces/bootgrid-item.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=bootgrid-item.js.map

/***/ }),

/***/ "../../../../../src/bootgrid/pipes/group-items.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupItemsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupItemsPipe = (function () {
    function GroupItemsPipe() {
    }
    GroupItemsPipe.prototype.transform = function (items, args) {
        //console.log(items);
        var OUTPUT = [];
        var FINAL_OUTPUT = [];
        items.map(function (item, i) {
            //console.log(item, item.group);
            if (!item.group) {
                OUTPUT.push(item);
            }
            else if (OUTPUT[OUTPUT.length - 1] && OUTPUT[OUTPUT.length - 1].grouped && OUTPUT[OUTPUT.length - 1].items.length < 4) {
                OUTPUT[OUTPUT.length - 1].items.push(item);
            }
            else {
                var GROUP = {
                    grouped: true,
                    items: [item]
                };
                OUTPUT.push(GROUP);
            }
        });
        //console.log(OUTPUT);
        OUTPUT.map(function (item) {
            if (item.grouped && item.items.length === 1) {
                FINAL_OUTPUT.push(item.items[0]);
            }
            else {
                FINAL_OUTPUT.push(item);
            }
        });
        //console.log(FINAL_OUTPUT);
        return FINAL_OUTPUT;
    };
    return GroupItemsPipe;
}());
GroupItemsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'groupItems'
    })
], GroupItemsPipe);

//# sourceMappingURL=group-items.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    hmr: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/hmr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hmrBootstrap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("../../../../@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};
//# sourceMappingURL=hmr.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__("../../../../../src/hmr.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
var bootstrap = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]); };
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map