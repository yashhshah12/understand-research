import { metadata } from '@/app/layout';
import {NormalizeData} from '@/types';
import {PaperResponse} from '@/types';
import {abstractDetails} from './abstractDetails'
//
const fetcherData = async (query : string , page : number = 1 , tabs: string) : Promise<PaperResponse> =>{
// const url = `http://localhost:3000/api/search?q=${encodeURIComponent(query)}`
if (!query) {
    return {  normalizeData :[] , metaData : null};
}

let externalapi = `https://api.openalex.org/works?search=${query}&page=${page}&per_page=20&api_key=${process.env.API_KEY}`;
if (tabs === "arXiv") {
    console.log("Tab is working ");
    
    externalapi += `&filter=locations.source.id:S4306400194`
}


try{
    const response = await fetch(externalapi);
    
    if (!response.ok) {
        console.log(response.status);
        
        throw new Error("Something went wrong");
            
    }   
    const opexAlex = await response.json();
       const metaData = opexAlex.meta;
        console.log(opexAlex);
        
        
      const normalizeData = opexAlex.results.map((paper:any) : NormalizeData=>{
            const abstract_inverted_index = paper.abstract_inverted_index;        
            const abstractString = abstractDetails(abstract_inverted_index);
            
            return {
        paperId : paper.id ? paper.id.split("/").pop() : "No id provided",
        author : paper?.authorships?.map((a : any) => a.author.display_name).join(', ') || "No author available ",
        title : paper?.title || "unkown",
        source : paper?.source || "OpenAlex",
        abstract : abstractString|| "No abstract available",
        publishDate : paper?.publication_date || paper.year || "no publish Date provided",
        year: paper?.publication_year || "No year provided",
        cited_count: paper.cited_by_count > 1000
        ? `${(paper.cited_by_count/1000).toFixed(1)}k`
            : paper.cited_by_count,
        isOpenAccess: paper.open_access?.is_oa || null, 
            }
        })
         
   
    return {normalizeData , metaData}

}catch(error :any){
    console.log(error.message , "This is route error message");
    
    return {normalizeData : [] , metaData : null};
}
}
// const getPaperById = async (id: string)=>{
//       const allpaper = await fetcherData("");
//     const foundPaper = allpaper.find((paper : NormalizeData) => paper.paperId === id);
//    console.log(foundPaper , "this is fetcher function");
   
//     return foundPaper || null;

// }

export {fetcherData }