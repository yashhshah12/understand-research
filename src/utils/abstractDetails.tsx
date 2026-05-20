

const abstractDetails = (invertedIndex : Record<string , number[]> | null | undefined) : string =>{
if (invertedIndex == null || Object.values(invertedIndex).length <= 0    ) {
    return "No abstract available"
}
let maxNumber = 0;
for (const value of Object.values(invertedIndex)) {
    for(const number of value){
        maxNumber = Math.max(maxNumber , number);
    }
}


const wordsString : string[] =  new Array(maxNumber + 1);
for(const [word , number] of Object.entries(invertedIndex)){
for(const n of number){
wordsString[n] = word
}

}


return wordsString.join(', ');

}
export {abstractDetails}

