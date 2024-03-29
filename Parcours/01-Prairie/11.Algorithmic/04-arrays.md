# Arrays

Type of challenge: *learning* +
Duration: *60 min* +
Team challenge: *solo*

## Learning objectives

At the end of this challenge you should:

* understand the concept of arrays
* be able to declare arrays
* be able to assign values to an array
* be able to select a value in an array

## The mission

This challenge will have you play around with the concept of [arrays](https://en.wikipedia.org/wiki/Array_data_type),
complete the exercises down below after you've read the explanations.

Arrays are variables of sort, but their specificity is that they can hold
multiple values at the same time. If a variables is a box holding a value, then
an array is a table containing multiple box.

In computer science an array *begins at 0*, meaning that the first element is on
the index 0. They have specific *sub functions* to add `array.add_value` and
remove `array.remove_value` data.

````JS
// This algorithm will output "Arsène Adalric Aelis".
_array_ names = ["Arsène","Adalric","John"]

remove_value(_names_[2])
add_value("Aelis",_$names_)

output(_$names_[0] + " " + _$names_[1] + " " + _$names_[2])
````

## Exercises

### Instructions

* write your algorithm on paper
* detail each and every step
* indicates the types of used variables

#### I print an array

Write an algorithm which prints everything in an array.

#### II - maximum

Write an algorithm which receives an *array of integers* and prints its
*maximum*.

#### III - minimum

Write an algorithm which receives an *array of integers* and prints its
*minimum*.

#### IV - minimum position

Write an algorithm which receives an *array of integers* and prints the position
of its *minimum*.

#### V - ordered array

Write a algorithm which receives an *array of integers* and check if its ordered
ascendantly. Print _true_ if the array is ordered, _false_ if it's not.

### Resources

* [conventions](./conventions.md)
* [arrays](https://computersciencewiki.org/index.php/Arrays)

## Congrats

It's all fun and games when you play around with arrays of one dimension, but
wait until you have to use an array with two dimensions or three.

[Next](./05-functions.md)