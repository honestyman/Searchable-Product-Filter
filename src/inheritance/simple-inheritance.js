var ClassA = function() {
    this.name = 'Class A';
}

var a = new ClassA();

ClassA.prototype.print = function() {
    console.log(this.name);
}

console.log('Print a : ', a.print());

var inheritsFrom = function(child, parent) {
    child.prototype = Object.create(parent.prototype);
};

/* Class B */
var classB = function() {
    this.name = 'Class B';
    this.surname = "I am the child";
}

inheritsFrom(classB, ClassA);

var b = new classB();

console.log('Print b : ', b.print());

classB.prototype.print = function() {
    ClassA.prototype.print.call(this);
    console.log(this.surname);
}

/* Class C */
var ClassC = function() {
    this.name = 'Class C';
    this.surname = 'I am the grand child';    
}

inheritsFrom(ClassC, classB);

ClassC.prototype.foo = function() {

}

ClassC.prototype.print = function() {
    classB.prototype.print.call(this);
    console.log('called from grand-child');
}

var c = new ClassC();
console.log('Print c : ', c.print());