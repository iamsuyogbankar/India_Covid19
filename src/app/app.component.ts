import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LetsDefeatCovid19';


  ngOnInit() {


    this.method();

  }



  method() {

    //RECURSION FUNCTION 

    // let length = function len(str: string) {

    //   if (str == '') {
    //     return 0;
    //   }
    //   // debugger
    //   return len(str.substring(1)) + 1;
    // }

    // let getLength = length('suyog');

    // console.log(getLength);


    // FACTORIAL PROGRAM
    // let factorial = function fact(num) {
    //   if (num === 1) {
    //     return 1;
    //   }
    //   return num * fact(num - 1);
    // }

    // let sum = factorial(5);

    // console.log(sum);


    // EXECUTION CONTEXT
    // let thiss = "window";

    // function a() {
    //   let fa = console.log('second function from a()');
    //   console.log(fa);

    //   b();
    //   console.log('lets see when i will on console');

    // }

    // function b() {

    //   console.log('second function from b()');
    //   c();
    // }

    // function c() {
    //   // a();
    //   console.log('3rd function from c()');

    // }

    // debugger
    // c();



    // let newObj: any = {};
    // let creaeMap = (obj) => {
    //   obj.map((e) => {
    //     newObj[e] = e.toUpperCase();
    //   })
    //   obj.forEach((val) => {
    //     newObj[val] = val.toUpperCase();
    //   })
    // };

    // let map = ["a", "v", "y", "z"];

    // creaeMap(map);
    // console.log(newObj);




    // COMPARING TWO OBJECTS USING JSON.stringify METHOD

    // let comapare = (obj, obj1) => {
    //   (JSON.stringify(obj) === JSON.stringify(obj1)) ? console.log('true') : console.log('false');
    // };

    // let obj = {
    //   name: "Jason",
    //   phone: "985df3759720",
    //   email: "jason@edabit.com"
    // };

    // let obj2 = {
    //   name: "Jason",
    //   phone: "9853759720",
    //   email: "jason@edabit.com"
    // };


    // comapare(obj, obj2);
    // console.log(comapare);




    // let freeShipping: any = {
    //   "Monopoly": 11.99,
    //   "Secret Hitler": 35.99,
    //   "Bananagrams": 13.99
    // };

    // let result: any = 0;

    // for (let value of Object.values(freeShipping)) {
    //   // debugger
    //   result += value;        
    // }

    // method 1 for getting value from object using reduce
    // result = Object.values(freeShipping).reduce((current: any, next: any) => current + next, 0);
    // console.log(result);

    // (result > 50.00) ? console.log(`your cost is ${result}, So you are elegible for free shoping`) : console.log(`your cost is ${result}, So you are not elegible for free shoping`);


    // METHOD 2
    // result = Object.keys(freeShipping).reduce((current: any, next: any) => {
    //   return current + freeShipping[next];
    // }, 0);


    // console.log(value);





    // const obj = { first: "James", last: "Baker", alias: 'JD' }

    // let { first = "Suyog", last = "Bankar", alias: nickname = "JBdfsf" } = obj;

    // console.log(first, last, nickname);


    // function shirtSize({size= 'big'} = {}){
    //   return size
    // }

    // shirtSize()
    // let str = 'hello worrld';
    // let result = [...new Set(str)];

    // console.log(result);
    // let result = [];

    // for (let i = 0; i < str.length; i++) {
    //   if (result.indexOf(str[i]) === -1) {
    //     result.push(str[i])
    //   }
    // }
    // console.log(result);



    // let obj: any = [
    //   { name: "John", age: 21, budget: 23000 },
    //   { name: "Steve", age: 32, budget: 40000 },
    //   { name: "Martin", age: 16, budget: 2700 }
    // ];

    // let result = obj.reduce((current, next) => {
    //   return current + next.budget;
    // }, 0)

    // console.log(result);

    // let obj = { a: 1, b: 2, c: 3 }
    // let result = Object.keys(obj);

    // for (let [key, value] of Object.entries(obj)) {

    //   if (Object.en) {

    //     result.push(Array.of(key))
    //   } else {
    //     result.push(Array.of(value))
    //   }

    // }

    // let final = Object.keys(obj).map((x) => {
    //   return  [...[x], obj[x]];
    // })

    // let final = [result, Object.keys(obj).map((item) => obj[item])]
    // console.log(final);

    // let obj = {
    //   "cyan": 23,
    //   "magenta": 12,
    //   "yellow": 10
    // };
    // let result: any = [];
    // // for (let [key, value] of Object.entries(obj)) {
    // //   console.log([key, value]);
    // //   result = [key, value].filter((item) => {
    // //     return item[value] - item[value];
    // //   });

    // // }
    // // let result = ...Object.values(obj)

    // console.log(Math.min(...Object.values(obj)));


    // let obj = [
    //   { tile: "B", score: 2 },
    //   { tile: "V", score: 4 },
    //   { tile: "F", score: 4 },
    //   { tile: "U", score: 1 },
    //   { tile: "D", score: 2 },
    //   { tile: "O", score: 1 },
    //   { tile: "U", score: 1 }
    // ];

    // let result = obj.reduce((current: any, next: any) => {
    //   return Array.from(next.title)
    // });


    // console.log(result);


    // let hasKey = { a: 44, b: 45, c: 46 };

    // console.log(hasKey.hasOwnProperty('a'));
    // console.table(hasKey);

    // let isInRange = { min: 4, max: 7 };

    // let inp = 4;
    // (inp >= isInRange.min && inp <= isInRange.max) ? console.log(true) : console.log(false);



    // let detail: any = {

    //   email: 'suyogbankar01@gmail.com'
    // }

    // detail.designation = 'software Engineer'


    // let { name = 'Suyog', email: emailId, designation: desi } = detail;

    // console.log(name, emailId, desi);

    // const obj: any = { two: 2 };
    // let { one = 1, two } = obj;

    // console.log(one, two);
    // function cityFacts(city) {
    //   let result = "";
    //   result = `${city['name']} has a population of ${city['population']} 
    //             and is situated in ${city['continent']}`


    //   console.log(result);

    // }

    // let city = {
    //   name: "Paris",
    //   population: "2,140,526",
    //   continent: "Europe"
    // }

    // cityFacts(city)

    // var library = [
    //   {
    //     title: 'The Road Ahead',
    //     author: 'Bill Gates',
    //     libraryID: 1254
    //   },
    //   {
    //     title: 'Walter Isaacson',
    //     author: 'Steve Jobs',
    //     libraryID: 4264
    //   },
    //   {
    //     title: 'Mockingjay: The Final Book of The Hunger Games',
    //     author: 'Suzanne Collins',
    //     libraryID: 3245
    //   }];

    // let result = library.sort((a, b) => {
    //   return b.libraryID - a.libraryID;
    // });

    // console.log(result);

    // console.log(Object.getOwnPropertyNames(Math));

    // let obj = { name: 'jsStartup' };
    // console.log(obj['name']);

    // let data = obj;
    // obj['name'] = "Javascrript Startup";

    // console.log(obj['name']);
    // console.log(data['name']);

    // let arr = [6, 4, 0, 3, -2, 1];

    // console.log(arr);

    // let result = arr.sort((a, b) => {
    //   return a - b;
    // });
    // console.log(result);


    // var library = [
    //       {
    //         author: 'Bill Gates',
    //         title: 'The Road Ahead',
    //         readingStatus: true
    //       },
    //       {
    //         author: 'Steve Jobs',
    //         title: 'Walter Isaacson',
    //         readingStatus: true
    //       },
    //       {
    //         author: 'Suzanne Collins',
    //         title: 'Mockingjay: The Final Book of The Hunger Games',
    //         readingStatus: false
    //       }];

    // console.log(library);

    //     let result = library.filter((res) => {
    //       return res.readingStatus == false;
    //     });

    //     console.log(result);


    // var student = {
    //   name: "David Rayy",
    //   sclass: "VI",
    //   rollno: 12
    // };


    // console.log('Object before', Object.entries(student));

    // delete student.rollno;

    // console.log('Object after', Object.entries(student));



    // var student = {
    //   name: "David Rayy",
    //   sclass: "VI",
    //   rollno: 12
    // };

    // console.log(Object.keys(student));

    // let msg = {
    //   firstName: "suyog",
    //   lastName: "bankar",
    //   address: "Mumbai",
    //   social: {
    //     facebook: 'suyog_yahoo.com',
    //     linkdin: 'suyog Bankar@linkdin'
    //   }
    // };


    // const { firstName, lastName, address, social } = msg

    // console.log(firstName);

    // let user = {
    //   name: "John Smith",
    //   age: 35
    // };

    // const [capt, wk, ...others] = teamIndia;

    // console.log(capt, wk, others);
    // let json = JSON.stringify(user)

    // console.log(JSON.parse(JSON.stringify(user)));



    // let user = {
    //   name: "John",
    //   years: 30,

    // };

    // let { name, years: age } = user;

    // console.log(name);

    // let sumSalaries = (obj) => {
    //   let values: any = 0;


    //   for (let val of Object.values(obj)) {
    //     // debugger
    //     values += val;
    //   }
    //   // console.log(values);
    //   return values;

    // }

    // let salaries = {
    //   "John": 100,
    //   "Pete": 300,
    //   "Mary": 250
    // };

    // console.log(sumSalaries(salaries));

    // let range = {
    //   from: 1,
    //   to: 5,
    //   length: 2
    // }
    // // let str = '𝒳😂';

    // let arr = Array.from(range);
    // for (let key of arr) {
    //   console.log(`range from ${key}`);

    // }

    //     let str = '𝒳😂';

    // // splits str into array of characters
    // let chars = Array.from(str);

    // console.log(chars);



    // let input = ['a', 'b', 'c', 'c', 'a', 'd', 'c'];
    // let input = [1, 2, 3, 2, 2, 4, 5, 5];
    // let result = [];
    // let duplicate = [];

    // for (let key of input) {
    //   if (!result.includes(key)) {
    //     result.push(key);

    //   }
    //   else {
    //     duplicate.push(key);
    //   }
    // }


    // console.log(result);
    // console.log(duplicate);


    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 29 };


    // let groupById = (arr) => {
    //   return arr.reduce((obj, value) => {
    //     debugger
    //     obj[value.id] = value;
    //     return obj;
    //   }, {})
    // }

    // let users = [
    //   {id: 'john', name: "John Smith", age: 20},
    //   {id: 'ann', name: "Ann Smith", age: 24},
    //   {id: 'pete', name: "Pete Peterson", age: 31},
    // ];

    // console.log(groupById(users));

    // let result = [];
    // let unique = (arr) => {

    //   for (let key of arr) {
    //     if (!result.includes(key)) {
    //       result.push(key);
    //     }
    //   }

    //   return result;
    // }

    // let arr = ["Hare", "Krishna", "Hare", "Krishna",
    //   "Krishna", "Krishna", "Hare", "Hare", ":-O"];


    // console.log(unique(arr));
    // console.log(result);

    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 29 };

    // let arr = [john, pete, mary];
    // let result: number;
    // let getAverageAge = (arr) => {
    //   result = arr.reduce((sum, current) => result = sum + current.age, 0) / arr.length;

    //   console.log(result);

    // }

    // getAverageAge(arr);



    // let userMapped = users.map((user:any) => {
    //   fullname: `${user.name} ${user.surname}`
    //   id: user.id
    // });

    // let usersMapped = users.map(user => ({
    //   fullName: `${user.name} ${user.surname}`,
    //   id: user.id
    // }));

    // let usersMapped = users.map(user => ({
    //   fullName: `${user.name} ${user.surname}`,
    //   id: `${user.id}`
    // }))

    //sort users by age

    // let sortt;
    // let sortAge = (users) => {
    //   users.sort((a, b) => a.age > b.age ? 1 : -1 );
    // }

    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };

    // let users = [john, pete, mary];

    // sortAge(users);

    // console.log(users[0].name);
    // console.log(users[1].name);
    // console.log(users[2].name);




    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };

    // let users = Array.from([john.name, pete.name, mary.name]);

    // console.log(users.join(', '));

    // let calculate = (inp1, inp2) => {
    //   let convert = parseInt(inp1) - parseInt(inp2);
    //   console.log('convert', convert);

    // }

    // calculate("1", "2");

    // let arr = ["HTML", "JavaScript", "CSS"];

    // let result = arr.slice(0);

    // result = result.sort((a, b) => {
    //     return a.localeCompare(b);
    //   });

    // console.log(result);
    // console.log(arr);


    // let camelize = (str) => {
    //   let splitStr = str.split("-");
    //   // console.log(splitStr);
    //   let result: any = ""
    //   if (splitStr[0] == '') {
    //     // debugger
    //     result = splitStr.splice(0, 1);
    //     result = splitStr.map((word, index) => {
    //       return (index == 0) ? word : word[0].toUpperCase() + word.slice(1);
    //     })
    //   } else {
    //     result = splitStr.map((word, index) => {
    //       return (index == 0) ? word : word[0].toUpperCase() + word.slice(1);
    //     })
    //   }
    //   console.log(result.join(' '));

    // }

    // camelize("-webkit-transition");




    // let filterrange = (a, b, ...arr) => {
    //   console.log(a, b, arr);
    //   let result = [];
    //   // result = arr.slice(a, b);
    //   arr.forEach((res) => {
    //     if (res >= a && res <= b) {
    //       result.push(res);
    //     }
    //     return false
    //   })

    //   // result = arr.filter((item) => {
    //   //   return item >= a && item <= b;
    //   // })
    //   console.log('result',result);

    // }

    // filterrange(1, 4, 5, 3, 8, 1);


    // let filterRangeInPlace = (a, b, ...arr) => {
    //   for (let i = 0; i < arr.length; i++) {
    //     // console.log(arr[i]);

    //     if (arr[i] < a || arr[i] > b) {
    //       // debugger
    //       // result.push(arr.splice(i, 1)
    //       arr.splice(i, 1)
    //       // i--;  
    //     } 

    //     console.log(arr);
    //   }
    // }
    // filterRangeInPlace(1, 4, 5, 3, 8, 1)




    // let arr = [5, 2, 1, -10, 8];

    // let result = arr.sort((a, b) => {
    //   return b - a;
    // })
    // console.log(result);



  }

}

