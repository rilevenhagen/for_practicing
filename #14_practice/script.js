console.log('🤜🏻🤪🤛🏻');


const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


const tip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        totals.push((bill * 0.15) + bill)
        tips.push((bill * 0.15))
    } else {
        totals.push((bill * 0.20) + bill)
        tips.push((bill * 0.20))
    }
};


for (let i = 0; i < bill.length; i++) {
    tip(bill[i])
}

console.log(tips);
console.log(totals);

const arr = [];

for (let i = 0; i < tips.length; i++) {
    arr.push(tips[i],)
}
for (let i = 0; i < totals.length; i++) {
    arr.push(totals[i])
}
console.log(arr)


function addsum(ar){
    let sum = 0;
    for (let i = 0; i < ar.length; i++){
        //sum = sum + arr[i];
        sum += ar[i]
    }
    return sum / ar.length
}

console.log(addsum(arr))
console.log(addsum(tips))
console.log(addsum(totals))



