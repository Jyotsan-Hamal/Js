let numbers_to_sort = [23,12,8,9,4,10,11,24,80]

function swap(num1,num2){
    return [num2,num1];
}

function bubble_sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                lis = swap(arr[j],arr[j+1]);
                arr[j] = lis[0];
                arr[j+1] = lis[1];
            }
            
        }
    }
    return arr;
}

console.log(swap(12,23))
console.log(bubble_sort(numbers_to_sort))

