// Find the smallest value from an array 
let smallest=(array)=>{
    let temp=array[0];
    array.forEach(element => {
        if (element<temp) temp=element;
        
    });
    return temp;
} 

console.log(smallest([2,5,6,22,-2,-55]));
