import React from "react";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

export default function App() {
  const student = new Student("Rohith", 20, "Computer Science");
  const teacher = new Teacher("Mr. Sharma", 45, "Mathematics");

  return (
    <div className="p-5 text-lg">
      <h1 className="text-2xl font-bold mb-4">
        Person Class Hierarchy Example
      </h1>
      <p>{student.displayInfo()}</p>
      <p>{teacher.displayInfo()}</p>
    </div>
  );
}
