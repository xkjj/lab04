
const sortNum = (num, callb) => {

    let splitNum = Array.from(String(num));

    if (callb === "sort") {
        splitNum.sort();
        let sortString = "";

        splitNum.forEach(digit => {
            sortString += `${digit} `;
        });
        return sortString;
    }

    if (callb === "reverse") {
        splitNum.reverse();
        let numString = "";

        splitNum.forEach(digit => {
            numString += `${digit} `;
        });
        return numString;
    }
};

let myReverse = sortNum(14598345, "reverse");
console.log(myReverse);
let mySort = sortNum(14598345, "sort");
console.log(mySort);


