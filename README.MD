# RANDNUM - Random Number Generator

A simple and flexible NPM package to generate random numbers with customizable options. Ideal for developers who need quick and reliable randomization in their projects.

## Features
- Generate random numbers.
- Specify a range (min and max values).
- Choose between integer or float results.

## Installation
To install the package, run:

```bash
npm install randnum_number_generator
```

## Usage
````
const randnum = require('random-number-generator');

// Generate a random integer between 1 and 100
console.log(randnum(1, 100));

// Generate a random float between 1 and 100
console.log(randnum(1, 100, true)); // Pass 'true' for float 

````
## Parameter

randomNumber(min = 0, max = 1, isInteger = false)

- min (number): The minimum value (inclusive). Default is 0.
- max (number): The maximum value (exclusive). Default is 1.
- isInteger (boolean): Whether to return an integer. Default is false.

## Examples

````
// Generate a random float between 1 and 10
randomNumber(1, 10); // e.g., 4.567

// Generate a random integer between 1 and 10
randomNumber(1, 10, true); // e.g., 7

````

## Contributing

Contributions are welcome! Open an issue or submit a pull request for new features or improvements.


