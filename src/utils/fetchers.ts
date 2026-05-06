import {NormalizeData} from '@/types';

const fetcherData = async (query : string) : Promise<NormalizeData[]>=>{
// const url = `http://localhost:3000/api/search?q=${encodeURIComponent(query)}`
if (!query) {
    return [];
}

const externalapi = `https://api.openalex.org/works?search=${query}&per-page=10`;
try{
    const response = await fetch(externalapi);
    if (!response.ok) {
        console.log(response.status);
        
        throw new Error("Something went wrong");
            
    }
    const opexAlex = await response.json();

      const normalizeData = opexAlex.results.map((paper:any)=>{
            return {
        paperId : paper.id ? paper.id.split("/").pop() : "No id provided",
        author : paper?.authorships?.map((a : any) => a.author.display_name).join(', ') || "No author available ",
        title : paper?.title || "unkown",
        source : paper?.source || "OpenAlex",
        abstract : paper?.abstract || "No   abstract available",
        url : paper?.url || "no link provided",
        publishDate : paper?.publication_date || paper.year || "no publish Date provided",
        category :  paper?.category || "Uncategorired",
        year: paper?.publication_year || "No year provided"
                    
            }
        })



    return normalizeData;


}catch(error :any){
    return [];
console.log(error.message , "This is route error message");

   
}
}










// const getPaperById = async (id: string)=>{
//       const allpaper = await fetcherData("");
//     const foundPaper = allpaper.find((paper : NormalizeData) => paper.paperId === id);
//    console.log(foundPaper , "this is fetcher function");
   
//     return foundPaper || null;

// }

export {fetcherData }