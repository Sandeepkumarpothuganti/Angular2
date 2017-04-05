import {Component} from 'angular2/core';


@Component({
    selector: "main-comp",
    templateUrl: "app/main.tpl.html"
})
export class MainComponent {
    title: string = "Welcome to UI Development !!";
    description: string = "We are learning Angular 2.0";
    course = {
        id: 1,
        name: "Angular 2.0",
        duration: "24Hr",
        cost: 250
    };
    courseArray: any = ['Angular', 'Gulp', 'MEAN', 'Bootstrap'];
    courses: any = [
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
    clickme = function (name) {
        alert('Selected course ' + name);
    };
    getCourseInfo = function (courseObj) {
        //    alert(courseObj.name);
        this.course = courseObj;
    };    
    constructor() { }
}












 // template:`
    //     <h1>Welcome To Edureka !!</h1>
    //     <h2>{{title}}</h2>
    // `
