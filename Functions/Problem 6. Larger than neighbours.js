//Problem 6. Larger than neighbours
//
//Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).
function largerThanNeighbours(index,arr){
    index = index || 0;
    arr = arr || [];
    if(arr[index-1]!=undefined && arr[index +1]!=undefined){
        if(arr[index]>arr[index-1]&&arr[index]>arr[index+1]){
            console.log('The element of '+ index+' index is bigger than his neighbours');
        }else{
            console.log('The element of '+ index+' index is smaller than his neighbours')
        }
    }else{
            console.log('There are no two neighbours in this element position');
        }
}

largerThanNeighbours(4,[2,4,5,7,8,9,7,5,4,3,22,3]);
largerThanNeighbours(8,[2,4,5,7,8,9,7,2,4,3,22,3]);
largerThanNeighbours(0,[2,4,5,7,8,9,7,2,4,3,22,3]);
