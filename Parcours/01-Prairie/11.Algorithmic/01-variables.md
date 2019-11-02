# Variables

Type of challenge: *learning* +
Duration: *30 min* +
Team challenge: *solo*

## Learning objectives

At the end of this challenge you should:

* understand the concept of variables
* be able to declare variables
* be able to assign value to variables

## The mission

This challenge will have you play around with the concept of [variables](https://en.wikipedia.org/wiki/Variable_(computer_science)),
complete the exercises down below after you've read the explanations.

A variable is like a box holding a value, it can be called upon whenever needed
and changed after assignment (except for _constant_). It also has a type which
defines the kinds of data you can store inside.

### Types of variables

* [constant](https://en.wikipedia.org/wiki/Constant_(computer_programming)): store a value of any types that cannot change
* [integer](https://en.wikipedia.org/wiki/Integer): store integers
* [float](https://en.wikipedia.org/wiki/Floating-point_arithmetic): store real numbers (ex: 3.14159)
* [character](https://en.wikipedia.org/wiki/Character_(computing)): store one character
* [boolean](https://en.wikipedia.org/wiki/Boolean_data_type): store either _true_ or _false_
* [string](https://en.wikipedia.org/wiki/String_(computer_science)): store a sequence of character
* [array](https://en.wikipedia.org/wiki/Array_data_type): store an array of values (we will see them later)

Programming languages usually have some predefined functions such as *output*
and *input* allowing the code to print something to the screen or ask for a user
input.

Furthermore, you should also research [operators](https://computersciencewiki.org/index.php/Operators) and how to do operation
within your code.

````JS
// This algorithm will output "Hi my name is John Doe and I am 42."
_constant_ NAME = "John Doe"
_integer_ age

input("What's your age?",$age)
output("Hi my name is _$NAME_ and I am _$age_.")

// This algorithm will output "10".
_integer_ nbr = 5
output($nbr * 2)
````

## Exercises

### Instructions

* write your algorithm on paper
* detail each and every step
* indicates the types of used variables

#### I - calculate

Write an algorithm which calculates:

* the *sum* of two chosen number
* the *division* of two chosen number
* the [*modulo*](https://en.wikipedia.org/wiki/Modulo_operation) of two inputed numbers

#### II - concatenate sentence

Write an algorithm which [*concatenates*](https://en.wikipedia.org/wiki/Concatenation) two phrases together.

#### III - VAT

Write an algorithm which receives a *price without VAT* and returns the *price
with VAT* with a *rate of 21%*.

#### IV - surface of a circle

Write an algorithm which receives the *radius of a circle* and calculate its
*surface*.

#### V - conversion of time to seconds

Write an algorithm which receives the *time of day* in three different numbers,
the hour, the minutes and the seconds and returns the *number of seconds* since
midnight.

## Resources

* [conventions](./conventions.md)
* [variables](https://computersciencewiki.org/index.php/Variables)

## Congrats

Variables, variables everywhere, they will soon become your best friend or maybe
your worst enemy, either way you're gonna need them.

[Next](./02-conditions.md)