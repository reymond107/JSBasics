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