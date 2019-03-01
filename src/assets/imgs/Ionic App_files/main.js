webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the InfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InfoProvider = /** @class */ (function () {
    function InfoProvider(http) {
        this.http = http;
        this.apiBaseUrl = '';
        this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/';
    }
    InfoProvider.prototype.getinfo = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiBaseUrl + 'Posts/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    InfoProvider.prototype.getinfos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiBaseUrl + 'Posts').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    InfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InfoProvider);
    return InfoProvider;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PostProvider = /** @class */ (function () {
    function PostProvider(http) {
        this.http = http;
        this.apiBaseUrl = '';
        this.apiBaseUrl = 'https://uniapp-api.herokuapp.com/api/';
    }
    PostProvider.prototype.getPost = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiBaseUrl + 'Posts/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PostProvider.prototype.getPosts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiBaseUrl + 'Posts').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PostProvider);
    return PostProvider;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_info_info__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infoDetail_infoDetail__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, infoProvider) {
        this.navCtrl = navCtrl;
        this.infoProvider = infoProvider;
        this.getinfo();
    }
    InfoPage.prototype.viewInfo = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__infoDetail_infoDetail__["a" /* infoDetailPage */], { id: id });
    };
    InfoPage.prototype.getinfo = function () {
        var _this = this;
        this.infoProvider.getinfos().then(function (data) {
            _this.infoList = data;
        });
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/info/info.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="../../assets/imgs/header.png" class="header-image">\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <div *ngFor="let info of infoList">\n  <ion-card (click)="viewInfo(info.id)">\n    <ion-card-content>\n      <ion-grid >\n        <ion-row>\n          <ion-col col-3><img src={{info.imageLink}}></ion-col>\n          <ion-col col-9 >\n            <ion-row>\n              <p class="info-card-header">{{info.title}}</p>\n            </ion-row>\n            <ion-row style="margin-top: 30px;" > \n              <ion-col col-6><ion-note style="float:left!important">team uni</ion-note></ion-col>\n              <ion-col col-6><ion-note style="float:right!important">today</ion-note></ion-col>\n            </ion-row>\n            </ion-col>\n        </ion-row>\n        <!-- <ion-row>\n          <ion-col col-6>This column will take 6 columns</ion-col>\n        </ion-row> -->\n      </ion-grid>\n    </ion-card-content>\n  \n  </ion-card>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/info/info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_info_info__["a" /* InfoProvider */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return infoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_info_info__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var infoDetailPage = /** @class */ (function () {
    function infoDetailPage(navCtrl, navParams, infoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.infoProvider = infoProvider;
        this.info = {};
        this.infoId = this.navParams.get('id');
        this.getInfo(this.infoId);
    }
    infoDetailPage.prototype.getInfo = function (id) {
        var _this = this;
        this.infoProvider.getinfo(id).then(function (data) {
            _this.info = data;
            console.log(data);
        });
    };
    infoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infoDetail',template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/infoDetail/infoDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="../../assets/imgs/header.png" class="header-image">\n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-card-header text-wrap>\n        <h3>{{info.title}}</h3>\n        </ion-card-header>\n  \n      <img src={{info.imageLink}}>\n  \n      <ion-card-content text-justify >\n         {{info.content}}\n        </ion-card-content>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/infoDetail/infoDetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_info_info__["a" /* InfoProvider */]])
    ], infoDetailPage);
    return infoDetailPage;
}());

//# sourceMappingURL=infoDetail.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CampusPage = /** @class */ (function () {
    function CampusPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CampusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-campus',template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/campus/campus.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="../../assets/imgs/header.png" class="header-image">\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/campus/campus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CampusPage);
    return CampusPage;
}());

//# sourceMappingURL=campus.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_post__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_post__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, postProvider) {
        this.navCtrl = navCtrl;
        this.postProvider = postProvider;
        this.getPosts();
    }
    HomePage.prototype.viewPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__post_post__["a" /* PostPage */], { id: id });
    };
    HomePage.prototype.getPosts = function () {
        var _this = this;
        this.postProvider.getPosts().then(function (data) {
            _this.postList = data;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="../../assets/imgs/header.png" class="header-image">\n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n    <div *ngFor="let post of postList">\n        <ion-card (click)="viewPost(post.id)" class="card"> \n            <ion-grid>\n              <ion-row>\n                  <ion-col col-9>\n                      <ion-card-header text-wrap>\n                          {{post.title}}\n                        </ion-card-header>\n                        <ion-card-content class="wrap-text">\n                          {{post.content}}\n                        </ion-card-content>\n                        <ion-note>Posted on: {{post.date | date}}</ion-note>\n                  </ion-col>\n                  \n                  <ion-col col-3 >\n                      <img  src = {{post.imageLink}} />\n                      \n                  </ion-col>\n              </ion-row>\n              \n            </ion-grid>\n          </ion-card>\n        </div>\n    \n\n \n</ion-content>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_post_post__["a" /* PostProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_post__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams, postProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postProvider = postProvider;
        this.post = {};
        this.postId = this.navParams.get('id');
        this.getPost(this.postId);
    }
    PostPage.prototype.getPost = function (id) {
        var _this = this;
        this.postProvider.getPost(id).then(function (data) {
            _this.post = data;
            console.log(data);
        });
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/post/post.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="../../assets/imgs/header.png" class="header-image">\n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-card-header text-wrap>\n        <h3>{{post.title}}</h3>\n        </ion-card-header>\n  \n      <img src={{post.imageLink}}>\n  \n      <ion-card-content text-justify >\n         {{post.content}}\n        </ion-card-content>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/post/post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_post_post__["a" /* PostProvider */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TalkPage = /** @class */ (function () {
    function TalkPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TalkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-talk',template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/talk/talk.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="../../assets/imgs/header.png" class="header-image">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/talk/talk.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TalkPage);
    return TalkPage;
}());

//# sourceMappingURL=talk.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="../../assets/imgs/header.png" class="header-image">\n    <!-- <ion-title>Account</ion-title>   -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-card class="usrCard">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-avatar>\n          <img src="../../assets/imgs/user.png" >\n      </ion-avatar>\n    </ion-col> \n      <ion-col col-8  style="margin-top: 6% ">\n        <h2 class="color">Godfried B Solomon</h2>\n        <h3 class="color">Godfried@ug.st.edu.gh</h3>\n        <h4 class="color">10581360</h4>\n        <button style="float:right"ion-button color="light" class="my-btn">edit</button>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n</ion-card>\n \n<ion-list no-lines >\n    <button ion-item  color="light">\n        <ion-icon name="bookmark" item-start></ion-icon>\n        Bookmarks\n    </button> \n\n    <button ion-item   color="light">\n        <ion-icon name="notifications" item-start></ion-icon>\n        Information Channels\n    </button> \n\n    <button ion-item  color="light">\n        <ion-icon name="information-circle" item-start></ion-icon>\n        Report an Issue \n    </button> \n\n    <button ion-item   color="light">\n        <ion-icon name="stats" item-start></ion-icon>\n       Polls & Surveys \n    </button> \n    <button ion-item   color="light">\n        <ion-icon name="cash" item-start></ion-icon>\n       Uni Trade Account \n    </button> \n    <button ion-item   color="light">\n        <ion-icon name="laptop" item-start></ion-icon>\n        Useful Links \n    </button> \n\n    <button ion-item   color="light" detail="true">\n        <ion-icon name="call" item-start></ion-icon>\n\n        Useful Contacts\n    </button> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.user = {};
    }
    LoginPage.prototype.login = function () {
        console.log(this.user);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.goSignup = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/login/login.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <img src="../../assets/imgs/header.png" class="header-image">\n  </ion-navbar> -->\n\n  \n</ion-header>\n\n<ion-content padding class="no-scroll">\n  <img src="../../assets/imgs/header.png" class="header-image">\n\n  <form (ngSubmit)="login()">\n    <!-- <ion-item>\n      <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input type="text" [(ngModel)]="user.email" name="email" placeholder="Student email address"></ion-input>\n    </ion-item> -->\n    <ion-item>\n      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" [(ngModel)]="user.id" name="id" placeholder="Student id number"></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" [(ngModel)]="user.firstName" name="firstName"placeholder="first name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" [(ngModel)]="user.lastName" name="lastName"placeholder="last name "></ion-input>\n    </ion-item> -->\n    <ion-item>\n      <ion-label><ion-icon name="key"></ion-icon></ion-label>\n      <ion-input type="password" [(ngModel)]="user.password" name="password" placeholder="password"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" round >LOGIN</button>\n  </form>\n  <p class="center">New user? <a (click)="goSignup()" style="color:#223DC7">Sign Up</a></p>\n</ion-content>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.regData = {};
    }
    SignupPage.prototype.register = function () {
        console.log(this.regData);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    SignupPage.prototype.goLogin = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/signup/signup.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <img src="../../assets/imgs/header.png" class="header-image">\n  </ion-navbar> -->\n\n  \n</ion-header>\n\n<ion-content padding class="no-scroll">\n  <img src="../../assets/imgs/header.png" class="header-image">\n\n  <form (ngSubmit)="register()">\n    <ion-item>\n      <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input type="text" [(ngModel)]="regData.email" name="email" placeholder="Student email address"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="school"></ion-icon></ion-label>\n      <ion-input type="text" [(ngModel)]="regData.id" name="id" placeholder="Student id number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" [(ngModel)]="regData.firstName" name="firstName"placeholder="first name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" [(ngModel)]="regData.lastName" name="lastName"placeholder="last name "></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="key"></ion-icon></ion-label>\n      <ion-input type="password" [(ngModel)]="regData.password" name="password" placeholder="password"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" round >SIGN UP</button>\n  </form>\n  <p class="center">Already have and account? <a (click)="goLogin()" style="color:#223DC7">Login</a></p>\n</ion-content>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_info_info__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_campus_campus__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_talk_talk__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_post_post__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_infoDetail_infoDetail__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_post_post__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_info_info__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_campus_campus__["a" /* CampusPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_talk_talk__["a" /* TalkPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_infoDetail_infoDetail__["a" /* infoDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */], name: 'Account', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_5__pages_info_info__["a" /* InfoPage */], name: 'Info', segment: 'info' },
                        { component: __WEBPACK_IMPORTED_MODULE_6__pages_campus_campus__["a" /* CampusPage */], name: 'Campus', segment: 'campus' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_talk_talk__["a" /* TalkPage */], name: 'Talk', segment: 'talk' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], name: 'Login', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */], name: 'Signup', segment: 'signup' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_post_post__["a" /* PostPage */], name: 'Post', segment: 'post/:postId' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_post_post__["a" /* PostPage */], name: 'infoDetail', segment: 'infoDetail/:infoId' }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_campus_campus__["a" /* CampusPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_talk_talk__["a" /* TalkPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_infoDetail_infoDetail__["a" /* infoDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_post_post__["a" /* PostProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_info_info__["a" /* InfoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_info__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__campus_campus__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__talk_talk__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__info_info__["a" /* InfoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__campus_campus__["a" /* CampusPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__talk_talk__["a" /* TalkPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/danflo/stuff/school/Project/Uni/src/pages/tabs/tabs.html"*/'<ion-tabs class="myTab">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"  color="primary"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Info" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Campus" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="UniTalk" tabIcon="call"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Account" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/danflo/stuff/school/Project/Uni/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map