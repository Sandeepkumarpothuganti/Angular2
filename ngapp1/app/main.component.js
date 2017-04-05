System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                    this.title = "Welcome to UI Development !!";
                    this.description = "We are learning Angular 2.0";
                    this.course = {
                        id: 1,
                        name: "Angular 2.0",
                        duration: "24Hr",
                        cost: 250
                    };
                    this.courseArray = ['Angular', 'Gulp', 'MEAN', 'Bootstrap'];
                    this.courses = [
                        { id: 1, name: 'Angular', duration: '24hr', cost: 250 },
                        { id: 2, name: 'Gulp', duration: '4hr', cost: 300 },
                        { id: 3, name: 'Grunt', duration: '14hr', cost: 400 },
                        { id: 4, name: 'Bootstrap', duration: '20hr', cost: 200 },
                        { id: 5, name: 'Node', duration: '4hr', cost: 500 },
                        { id: 6, name: 'Knockout', duration: '14hr', cost: 200 },
                        { id: 7, name: 'React', duration: '40hr', cost: 350 },
                        { id: 8, name: 'Extention', duration: '2hr', cost: 300 },
                        { id: 9, name: 'Karma', duration: '12hr', cost: 200 },
                        { id: 10, name: 'Jasmine', duration: '24hr', cost: 250 }
                    ];
                    this.clickme = function (name) {
                        alert('Selected course ' + name);
                    };
                    this.getCourseInfo = function (courseObj) {
                        //    alert(courseObj.name);
                        this.course = courseObj;
                    };
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: "main-comp",
                        templateUrl: "app/main.tpl.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
// template:`
//     <h1>Welcome To Edureka !!</h1>
//     <h2>{{title}}</h2>
// `
//# sourceMappingURL=main.component.js.map