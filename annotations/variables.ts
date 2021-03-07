// type annotation. This means apples can only hold a number.
const apples: number = 5;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

//Array
let colors: string[] = ['red', 'blue'];
let myNumbers: number[] = [1, 2, 4];
let truths: boolean[] = [true, false];

//classes

class Car {}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

//function

const logNumber: (i: number) => void = (i) => {
	console.log(i);
};

function logNumber2(i: number): void {
	return;
}

//when to use annotations

// 1 function that returns the any type

const json = '{"X": 10, "y": 20}';
//coordinates is any. Avoid it at all costs. Will not allow TS to do its job
//const coordinates = JSON.parse(json);

//fix any
const coordinates: { x: number; y: number } = JSON.parse(json);

//2 declare variable on line and initialize later

let foundWord: boolean;

foundWord = true;

//2 Variable that has a type that can't be inferred

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}
