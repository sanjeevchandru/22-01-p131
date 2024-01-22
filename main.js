document.write("96. to compute the sum of the absolute differences of consecutive numbers in a given array of integers."+"<br>");
function test96(arr){
    var x=0;
    var y=[];
    for(let i=1;i<arr.length;i++){
         x=x+Math.abs(arr[i]-arr[i-1]);
        //  y.push(Math.abs(arr[i]-arr[i-1]));
    }
    return x+"<br>"+y;
}
document.write("The array :[1,2,7,4,5,6] , Ans :"+test96([1,2,7,4,5,6])+"<br><br>");