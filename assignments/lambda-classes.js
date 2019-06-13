// CODE here for your Lambda Classes

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`
  }
}

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
  }
}

// Create some objects...
const fred = new Instructor({
  'name': 'Fred',
  'age': 40,
  'location': 'SF',
  'specialty': 'JavaScript',
  'favLanguage': 'JavaScript',
  'catchPhrase': ''
})

const mary = new Student({
  'name': 'Mary',
  'age': 30,
  'location': 'SF',
  'previousBackground': 'accounting',
  'className': 'Web-21',
  'favSubjects': ['JavaScript', 'Java', 'CSS']
})

const anna = new ProjectManager({
  'name': 'Anna',
  'age': 35,
  'location': 'SF',
  'specialty': 'JavaScript',
  'favLanguage': 'JavaScript',
  'catchPhrase': 'Let\'s do this!',
  'gradClassName': 'CS',
  'favInstructor': 'Fred'
})

//Test..
console.log(fred.speak()) //'Hello, my name is Fred, I am from SF.'
console.log(fred.demo('JavaScript')) //'Today we are learning about JavaScript.'
console.log(mary.speak()) //'Hello, my name is Mary, I am from SF.'
console.log(mary.sprintChallenge('JavaScript-IV')) //'Mary has begun sprint challenge on JavaScript-IV'.
console.log(anna.speak()) //'Hello, my name is Anna, I am from SF.'
console.log(anna.standUp('Web-21')) // 'Anna announces to Web-21, @channel standy times!
console.log(anna.debugsCode(mary, anna.specialty)) //'Anna debugs Mary's code on JavaScript.'