const add = (a: number, b: number): number => {
	return a + b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
};

const throwError = (message: string): never => {
	throw new Error(message);
};

const forecast = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {};

const profile = {
	name: 'ahmed',
	age: 20,
	coords: {
		lat: 0,
		lng: 15,
	},
	setAge(age: number): void {
		this.age = age;
	},
};

const { age: birthday }: { age: number } = profile;
const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
