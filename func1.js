
const sortStrByAlpha = (data) => {
    /*console.log(`String sent to function is: 
                ${data} `);*/

    let arrString = data.split(" ");
    //console.table(arrString);

    arrString.sort();
    //console.table(arrString);

    let alphaString ="";

    arrString.forEach(word => {
        alphaString += `${word} `;
    });

    /*console.log(`String sorted alphabetical:
                    ${alphaString}`);*/

    return alphaString;


};


let mySort = sortStrByAlpha("john is a junior javascript developer");
console.log(mySort);

const strReverse = (data) => {

    let arrString = data.split("");  
    arrString.reverse(); 
    let rString="";

    arrString.forEach(character => {
        rString += `${character}`;
    });
    
    return rString;

};

let myReverse = strReverse("john is a junior javascript developer");
console.log(myReverse);