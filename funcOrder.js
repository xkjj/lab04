let firstCall = (callB) => {
    setTimeout(() => {
        console.log('Creates a calculation which is 100, but takes one second.');
        let resultFirst = 100;
        return callB(resultFirst);
    }, 1000);
};

let secondCall = (num) => {
    console.log(`Called to perform logic on the first function result..`);
    let numCal = num + 1;
    console.log(`Result: ${numCal}`);
};

//let calFirst = firstCall();
//let useFirst = secondCall(calFirst);
let cal = firstCall(secondCall);

let cal2 = firstCall( (num) =>  {

    console.log(`Called to perform logic on the first function result..`);
    let numCal = num + 200;
    console.log(`Result: ${numCal}`);

});