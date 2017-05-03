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
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var detail_component_1 = require('./detail/detail.component');
var cart_component_1 = require('./cart/cart.component');
var payment_component_1 = require('./payment/payment.component');
var paymentconfirm_component_1 = require('./paymentconfirm/paymentconfirm.component');
var paymentmethod_component_1 = require('./paymentmethod/paymentmethod.component');
var home_component_login_1 = require('./home-login/home.component-login');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var auth_guard_1 = require('./_guards/auth.guard');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'detail/:kode_barang', component: detail_component_1.DetailComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: '', component: home_component_login_1.HomeComponentLogin, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'payment', component: payment_component_1.PaymentComponent },
    { path: 'paymentconfirm', component: paymentconfirm_component_1.PaymentComponentConfirm },
    { path: 'paymentmethod', component: paymentmethod_component_1.PaymentComponentMethod },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map