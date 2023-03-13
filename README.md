# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @oliverdanger/lotide`

**Require it:**

`const _ = require('@oliverdanger/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns first item in array
* `tail`: returns all but first item in array
* `middle`: returns middle item or two items of array if array is at least 3 long
* `eqArrays`: returns true if two arrays are equal
* `assertEqual`: asserts if two values are equal and returns true
* `assertArraysEqual`: asserts if two arrays are equala nd returns true