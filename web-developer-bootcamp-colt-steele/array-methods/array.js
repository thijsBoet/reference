var arr = [1,2,3,4,5,6,7,8,9,10];

// *** reverses array ***
function printReverse(arr){
    var reversed = arr.reverse();
    reversed.forEach(i => console.log(i));
}
printReverse(arr);

// *** tests uniformity ***
function isUniform(arr){
    var first = arr[0];
    for (var i=1; i<arr.length; i++){
        if (arr[i]!==first){
            return false;
        } 
    }
    return true;
}
isUniform([arr]);

// *** sums total *** prototype.sum() => ;-)
function sumArray(arr){
    var total=0;
    arr.forEach(function (element){
        total +=element;
    });
    return total;
}
sumArray(arr);

// *** find maximum value *** prototype.max() => ;-)
function max(arr){
    var max = arr[0];
    for (var i=1; i<arr.length; i++){
        if (arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}
