function day_occur(string_val)
{
    let count = 0
    let value = string_val.indexOf("day")
    while(value !== -1)
    {
        count++
        value = string_val.indexOf("day", value+1)
    }
    console.log(count)
}
//while(value !== -1): The loop keeps running as long as indexOf actually finds the word. 
// (Remember, indexOf returns -1 when a word is missing).count++:
//  Every time the loop runs, it means a match was found, so the counter goes up by 1.value+1: 
// This shifts the starting point of the next search to the character immediately after the current match.
//  This prevents the loop from getting stuck on the same word forever.

day_occur("Sunday is Funday")