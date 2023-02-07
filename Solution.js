// Problem Solution #1

// Taking a positive number, then doing simple multiplication, addition, division, subtraction with that number.

function mindGame(myNumber){
      if(myNumber<0){
            return 'Please Provide a positive number';
      }

      const multiplication = (myNumber * 3);
      const addition = (multiplication + 10);
      const division = (addition / 2);
      const subtraction = (division - 5);

      return subtraction;
      
}


// Problem Solution #2

// Declaring a string 'even' or 'odd' based on their total number of character.

function evenOdd(string){
      if(typeof string !== 'string'){
            return 'Please provide a string';
      }
        let characters = (string.length);
         const remainder = characters % 2;
         if(remainder == 0){
            return 'even';
         }
         else{
         return 'odd';
      }
}


// Problem Solution #3

// Taking a number as input then subtracting 7 from that input, if the subtraction is less than 7 then returning the input as it is,and if the subtraction is equal or larger than 7 then returning the input as twice as much.

function isLGSeven(number){
      if(typeof number !== 'number'){
            return 'Please provide a number'
      }

         let subtraction = number - 7;
         if(subtraction < 7){
            return subtraction;
         }
        else{
            return number *2;
        }
}


// Problem Solution #4

// Taking an array as input then counting the negative numbers as 'bad data' and then returning the number of 'bad data' as output.


// let myArray = [80 , 22 , -54, 5 , 77 , -20 , -47];

function findingBadData(array) { 
      if(!Array.isArray(array)){
            return 'Please provide an array'
      }
    let negatives = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives.length;
}




// Problem Solution #5

//Taking 3 inputs, convert those input by multiplying with some constant numbers, then adding all those numbers and getting the total number. If the total is less than (1000 * 2) then returning the number as it is, and if the total is larger than or equal to (1000 * 2) then subtracting 2000 from the total.


function gemsToDiamond(gem1, gem2, gem3){
    if(typeof gem1 != 'number' || typeof gem2 != 'number' || typeof gem3 != 'number' ){
      return 'Please provide valid information';
    }
    else{
      convertingGem1 = gem1 * 21;
      convertingGem2 = gem2 * 32;
      convertingGem3 = gem3 * 43;

      let totalDiamond = (convertingGem1 + convertingGem2 + convertingGem3);
      if(totalDiamond < 1000 * 2){
            return totalDiamond;
      }
      else if(totalDiamond >= 1000 * 2){
            return (totalDiamond - 2000);
      }
   }
}

