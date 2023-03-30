const numbers = [1, 2, 3, 4];

console.log(includesElement(numbers, 6));

function includesElement(array, searchElement){
    for (let element of array)
        if (element === searchElement)
            return true;
        return false;
    }