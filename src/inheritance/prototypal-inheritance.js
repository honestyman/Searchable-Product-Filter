function Person (firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = this.age;
    this.gender = gender;
};

function Teacher (firstName, lastName, age, gender, subject) {
    Person.call(this, firstName, lastName, age, gender);

    this.subject = subject;
};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;