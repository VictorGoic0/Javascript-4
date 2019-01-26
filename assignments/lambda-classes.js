class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.speciality = attributes.speciality;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject))
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun spritn challenge on ${subject}.`
  }
}

class ProjectMananger extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
  }
}

const tyler = new ProjectMananger({name: 'Tyler', age: 25, location: 'NYC', gender: 'male', favLanguage: 'Python', favInstructor: 'Josh Knell', gradClassName: 'CS3'});
const colin = new Student({name: 'Colin', age: 18, location: 'Pittsburgh', gender: 'male', favSubjects: ['Javascript', 'CS', 'Flexbox']});

console.log(tyler.debugsCode({name: 'Chance', age: 22}, 'JSIII'));
colin.listsSubjects()
/*
Stretch Problem
Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
Add a graduate method to a student.
This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
*/
