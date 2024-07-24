let arr2 = prompt('enter something').split(' ');
var sum2 = 0;

arr2.forEach(function ( value ,index, arr) {
    sum2 += index;
});
console.log(sum2);