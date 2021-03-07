const carMakers: string[] = ['ford', 'toyota', 'honda'];
const dates = [new Date(), new Date()];

//2D array

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

//Help with inference when extracting values
const car1 = carMakers[0];
const mCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(100);

// Help with map and other methods
carMakers.map((car: string): string => {
	return car.toLowerCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
