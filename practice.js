//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //The 'this' keyword is used to refer the object, intended to make code less ambiguous and easy to read.
      //It is generally the equivalent of a pronoun

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Explicit: call,bind, apply
      //Implicit: binds implicitly as the function is calling the object
      //New: constructors with "New"
      //Default: refers to the window/global scope, doesn't define a value

  // 3) What is the difference between call and apply?

    //call takes in  the context with a string and multiple arguments while apply takes in the context with an array

  // 4) What does .bind do?

      //creates a new function that will have "this" as the first parameter and will call a particular value that can be re-used later. This allows you to re-use methods.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: 'TheRealMPC',
  email: 'smkscar25@gmail.com',
  getUsername: function(){
    return this.username;
  }
}

user.getUsername();

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here

function Car(make, model, year){
  this.moveCar = function(){
  return  0;
  }
}
Car.call();

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)

getYear(prius);
getYear(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser);//Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //the username "iliketurtles"

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //this is bound to the object myUser


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
