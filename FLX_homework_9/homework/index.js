var data = [
	{
		"_id": "5b5e3168c6bf40f2c1235cd6",
		"index": 0,
		"age": 39,
		"eyeColor": "green",
		"name": "Stein",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e3168e328c0d72e4f27d8",
		"index": 1,
		"age": 38,
		"eyeColor": "blue",
		"name": "Cortez",
		"favoriteFruit": "strawberry"
	},
	{
		"_id": "5b5e3168cc79132b631c666a",
		"index": 2,
		"age": 2,
		"eyeColor": "blue",
		"name": "Suzette",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e31682093adcc6cd0dde5",
		"index": 3,
		"age": 19,
		"eyeColor": "green",
		"name": "George",
		"favoriteFruit": "banana"
	}
]

function typeFinder(...args) {
	let myTypes = [];
	for (let i = 0; i < args.length; i++) {
		myTypes.push(typeof args[i]);
	}
	return myTypes;
}
typeFinder('Number', 3, undefined);

function executeforEach(myArray, myFunc) {
	for (let i = 0; i < myArray.length; i++) {
		myFunc(myArray[i]);
	}
}

executeforEach([2, 7, 4], function (item) {
	console.log(item);
});

function arrayMap(myArray, myFunc) {
	let result = [];
	executeforEach(myArray, (item) => {
		result.push(myFunc(item));
	});
	return result;
}
arrayMap([2, 5, 8], function (item) {
	return item + 3;
});

function filter(array, filter) {
	let result = [];
	executeforEach(array, function (item) {
		if (filter(item)) {
			result.push(item);
		}
	});
	return result;
}
filter([2, 5, 8], function (item) {
	return item > 3;
});

function getAmountOfAdultPeople(myArray) {
	let result = filter(myArray, function (item) {
		return item.age > 18;
	});
	return result;
}
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(myArray) {
	return arrayMap(filter(myArray, function (item) {
		return item.age > 18 && item.eyeColor === 'green' && item.favoriteFruit === 'banana';
	}), function (item) {
		return item.name;
	});
}
getGreenAdultBananaLovers(data);


function keyArray(objectKey) {
	let result = [];
	for (let key in objectKey) {
		if (objectKey.hasOwnProperty(key)) {
			result.push(key);
		}
	}
	return result;
}
keyArray({
	keyOne: 1,
	keyTwo: 2,
	keyThree: 3
});

function values(objectKey) {
	let result = [];
	for (let key in objectKey) {
		if (objectKey.hasOwnProperty(key)) {
			result.push(objectKey[key]);
		}
	}
	return result;
}
values({
	keyOne: 1,
	keyTwo: 2,
	keyThree: 3
});

function showFormattedDate(date) {
	let year = date.getFullYear();
	let month = date.toString().substr(4, 3);
	let day = date.getDate();
	return "Date: " + day + ' of ' + month + ', ' + year;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
	return !(date.getFullYear());
}
isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
	return Boolean(date.getMonth());
}
isEvenMonth(new Date('2019-02-27T01:10:00'));