function Person(name) {
    this.name = name;
}

//Define the class methods
Person.prototype = {
    swing: function() {
        console.log('swing() function called of Person');
    },

    walk: function() {
        console.log('walk() function called of Person');
    }
};

function Monkey(isFriendly) {
    this.isFriendly = isFriendly;
}

Monkey.prototype = {

    swing: function() {
        console.log('swing() function called of Monkey');
    },

    walk: function() {
        console.log('walk() function called of Monkey');
    }
};

function Ben() {
    //call the super constructors of the base class
    Person.call(this, 'Ben');
    Monkey.call(this, true);
}

//define the class methods
Ben.prototype = {

    highFive: function(person) {
        return ('Hey '+person.name + ', high five!');
    },

    walk: function() {
        return ( Person.prototype.walk.call(this) );
    }
};

Ben.prototype = Object.assign({}, Person.prototype, Monkey.prototype, Ben.prototype);

var ben = new Ben();

console.log('Walking : '+ben.walk());
console.log('Swinging : '+ben.swing());

console.log('High Five : ', ben.highFive( new Person('Zain') ));