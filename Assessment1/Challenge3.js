findMissingNumber([1, 2, 4, 5, 6]); 
 
function findMissingNumber(number ) {
    for(let i=1;i<number.length+1; i++)
    {
        if(number[i-1]!=i)
        {
            console.log(i);
            break;
        }
    }
    
  
} 
