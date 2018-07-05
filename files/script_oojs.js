function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.pronoun = this.gender.toUpperCase() ==='MALE' ? "He" : 'She';
  this.interest = function() {
                    console.log(this.interests);
                    if(interests.length <= 1) {
                          console.log('Interest is: ' + interest);
                          return interest = this.interests[0];
                          
                    } else {
                      interest = interests[0];
                        for (i=1 ; i < interests.length -1; i++) {
                          interest = interest + ', ' + this.interests[i]  
                        }
                        interest = interest + ' and ' + interests[interests.length -1];
                        console.log(interest);
                        return interest;
                    }
                  };
  this.bio = function() {
            alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + this.pronoun + ' likes ' + this.interest() + '.');
            };

  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}


var person = new Person('Rui', 'Reis', 42, 'Male', ['swimming']);
person.bio();

console.log(person.interests.length);
console.log(person.interest());
