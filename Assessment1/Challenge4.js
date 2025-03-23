firstNonRepeatingChar("racecar");

function firstNonRepeatingChar(string)
{
    let HashMap={};

    for( let i=0; i<string.length; i++)
    {
        let char = string[i];
        HashMap[char]= (HashMap[char] || 0)+1;
        
    }

    for(let i=0; i<string.length;i++)
    {
        if(HashMap[string[i]]===1)
        {
            console.log(string[i]);
            break;
        }
    }


    
}
