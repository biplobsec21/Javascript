// find the char that has maximum number of occurance in sentence
//-->
function maxChar(string) {
    const obj = {};
    let arr = string.split('');

    for (let cnt of arr) {
        // if (!obj[cnt]) {
        //     obj[cnt] = 1;
        // } else {
        //     obj[cnt]++
        // }
        obj[cnt] = obj[cnt] + 1 || 1;

    }
    let max = 0;
    let maxChar = '';
    for (let char in obj) {
        if (obj[char] > max) {
            max = obj[char];
            maxChar = char;
        }
    }
    console.log(maxChar);
    return maxChar;

}
//--> maxChar("hello everyone");

// find the char that has maximum number of occurance in sentence
//-->fizzbuzz
function fzzBuzz(number) {

    for (let cnt = 1; cnt <= number; cnt++) {

        if (cnt % 5 === 0 && cnt % 3 === 0) {
            console.log("fizzBuzz");
        } else if (cnt % 3 == 0) {
            console.log("fizz");
        } else if (cnt % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(cnt);
        }


    }
}
//-->fzzBuzz(20);

function chunk(array, size) {
    const totalArray = Math.ceil(array.length / size);
    const result = [];
    let counter = 0;
    for (let tcnt = 0; tcnt < totalArray; tcnt++) {
        const tempArray = [];
        for (counter; counter < array.length; counter++) {
            console.log(counter);

            if (tempArray.length === size) {
                break;
            } else {
                tempArray.push(array[counter]);
            }

        }
        result.push(tempArray);
    }

    console.log(result);
    return result;
}
chunk([1, 2, 3, 4, 5, 6, 7], 3);