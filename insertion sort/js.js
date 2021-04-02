let nums = [153, 20, 15, 100, 98, 4];

function sort(array) {
    let helper; //to store current minimal value

    //iterate through unsorted part of an array
    for(let i = 0; i < array.length-1; i++) {

        //iterate through unsorted part of an array and compare with first unsorted value
        for(let j = i+1; j<array.length; j++) {

            //swap when current value (j) is less than first unsorted value (i)
            if (array[i]>array[j]) {
                helper = array[i];
                array[i] = array[j];
                array[j] = helper;
            }
        }        
    }
    return array
}

console.log(sort(nums));
