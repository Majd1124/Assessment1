countVowels("typescript"); // 3 
 
function countVowels(string){

    let vowelschars=['a','e','u','i','o'];
    var count=0;

    for( let i=0; i<string.length; i++)
    {
        
        if(vowelschars.includes(string[i]))
        {
            count++;
        }
    }
    console.log(count);
    
    
   
} 
