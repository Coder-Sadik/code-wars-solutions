const upperCase = (array) => {
    array.forEach((e, i) => {
        array[i] = e.replace(/^./, (c) => c.toUpperCase());
    });
    return array;
}

let array = ['coding', 'is', 'fun'];
console.log(upperCase(array));
