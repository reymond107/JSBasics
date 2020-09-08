// for (let i = 1; i <= 5; i++) {
//     let str = ' '.repeat(5 - i);
//     let str2 = '*'.repeat(i * 2 - 1)

//     console.log(str + str2 + str);
// }

// for (let i = 5; i >= 1; i--) {
//     let str3 = ' '.repeat(5 - i);
//     let str4 = '*'.repeat(i * 2 - 1)
//     console.log(str3 + str4 + str3)

// }

// let value = true;
// value = String(value);
// console.log(value);
// console.log(typeof value);

// let number = '123';
// number = Number(number);
// console.log(number);
// console.log(typeof number);

// let consdition = 1;
// consdition = Boolean(1);
// console.log(consdition);
// console.log(typeof consdition);

// alert();
// confirm();


// alert('Welcome User');
// let name = prompt('Name');
// console.log(name);

// let age = prompt('age');
// console.log(age);

// let status = confirm('Are you still single?');
// console.log((single ));


// let year = prompt('what year are you born');
// if (year == 1996) {
//     alert ('youre not baby')
//     alert 
// }



// if condition {
//     alert('youre a nanny')
// } else {
//     alert('youre worthy')
// }
// let year = prompt('year born')

// let condition = (year == 1996);

// let result = condition ? alert('you are awesome') :
//     alert('you are not');


// let num = prompt('give me a number');
// if (num % 3 === 0 && num % 5 === 0) {
//     alert("eureka");
// } else if (num % 5 === 0) {
//     alert("it's divisible by 5");
// } else if (num % 3 === 0) {
//     alert("it's divisible by 3");
// } else if (num % 3 !== 0 && num % 5 !== 0) {
//     alert("your number is neither divisible by 5 or 3");
// } else {
//     alert("you did");
// };

// console.log(num)

// let num = prompt('give me a number');

// if (num % 3 === 0 && num % 5 === 0) {
//     alert("eureka");
// } else if (num % 5 === 0) {
//     alert("it's divisible by 5");
// } else if (num % 3 === 0) {
//     alert("it's divisible by 3");
// } else if (num % 3 !== 0 && num % 5 !== 0) {
//     alert("your number is neither divisible by 5 or 3");
// } else if (num !== num) {
//     alert("Yow");
// };

// console.log(num);


// let x = 5;

// while (x > 5) {
//     console.log(x);
//     x--;
// }

// let a = 5;

// do {
//     console.log(a);
//     a--;
// } while (a > 0);



// for(let i =1 ; i <= 5; i++);

// let str = '*'.repeat(0 + i);
// console.log(str);



// let t = 1;

// while (t <= 5) {
//     let str = '*'.repeat(0 + t);
//     console.log(str);
//     t++;
// }

// let m = 1

// do {
//     let str = '*'.repeat(0 + m);
//     console.log(str);
//     m++
// } while (m <= 5);


// var rows = 10;

// for(var i=1; i<=rows; i++) {

// }

// let x = 2 + 5;

// switch (x) {
//     case 3:
//         alert('too small');
//         break;
//     case 4:
//         alert('exactly');
//         break;
//     case 5:
//         alert('too large');
//         break;
//     default:
//         alert('idk such value');
//         break;
// }

// let num = prompt('give me a number');
// if (num != Number(num) ) {
//     alert("Hey! it's not a number");
// } else if (num % 3 === 0 && num % 5 === 0) {
//     alert("eureka");
// } else if (num % 5 === 0) {
//     alert("it's divisible by 5");
// } else if (num % 3 === 0) {
//     alert("it's divisible by 3");
// } else if (num % 3 !== 0 && num % 5 !== 0) {
//     alert("your number is neither divisible by 5 or 3");
// } 
// console.log(num);

// let num = prompt('give me a number');

// switch (num) {
//     case 1:
//         num % 3 === 0 && num % 5 === 0;5
//         alert("eureka");
//         break;
//     case 2:
//         num % 5 === 0;
//         alert("it's divisible by 5");
//         break;
//     case 2:
//         num % 5 === 0;
//         alert("it's divisible by 5");
//         break;
// }
// console.log(num);

// function greeting(name) {
//     alert('Hello' + name);
// }

// function ProcessorInput(callback) {
//     let name = prompt('name please')

// }


// function div5(number) {
//     let x = number % 5 === 0;
//     return x;
// }
// console.log(div5(25))


// 1240, 480, 2680

// as function

// <500 = 20%
// 500->2000 = 15%
// >2000 = 10%


// array of bill
// array of bill+tip


// let bill = prompt('your bill?')

// let tip = Number.bill + tipCalculator(bill)

// function tipCalculator(bill) {
//     if (bill < 500) {
//         return (bill * 0.2);
//     } else if (bill >= 500 && bill <= 2000) {
//         return (bill * 0.15);
//     } else if (bill > 2000) {
//         return (bill * 0.10);
//     }
// }

// alert(`your tip is ${tipCalculator(bill)}`)




// let bills = [1240, 480, 2680];

// let tip = bills.filter(function(item) {
//     return item > 480;
// });

// console.log(tip);
// let tips = bills.forEach(tipCalculator.push(item));

// console.log(tips)

// let values = ['a', 'b', 'c', 'd'];
// let last = values.push('cacao');
// console.log(values, last);



// let i;

// for (i = 0; i <= bills.length; i++) {
//     console.log(25 + i);
// }

// console.log(i)

let bills = [1240, 480, 2680];
// bill (numeric) as param; returns tip
let tipWaiter = (bill) => {
    if (bill < 500) {
        return bill * 0.2;
    }
    if (500 <= bill && bill <= 2000) {
        return bill * 0.15;
    }
    // if (2000 < bill) {
    return bill * 0.1;
    // }
};

let tips = [];
let paidAmounts = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(tipWaiter(bills[i]));
    paidAmounts.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(paidAmounts);