let numbers = [13, 7, 82, 129, 0, 40, 2, 32, 19, 23];

function sort(array) {
    for (let i = 0; i<array.length; i++) {

        //find min
        let min = array.length-1
        for (let j = i; j<array.length; j++) {
            if (array[j]<array[min]) {
                min = j; 
            }        
        }
        //swap min
        let helper = array[min]; 
        array[min] = array[i]; 
        array[i] = helper;
    }
    return array;
}
console.log(sort(numbers));
