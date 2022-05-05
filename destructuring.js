//OBJECT DESTRUCTURING
//Q1: 8
//1846
//Q2: {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
//Q3: "Your name is Alejandro and you like purple"
//"Your name is Melissa and you like green"
//"Your name is undefined and you like green"

//ARRAY DESTRUCTURING
//Q1: Maya
//Marisa
//Chi
//Q2: "Raindrops on roses"
// "whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
//Q3: [10, 30, 20]

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const {a, b} = obj.numbers;

var arr = [1, 2];
var temp = arr[0];
[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => 
({first, second, third, rest});