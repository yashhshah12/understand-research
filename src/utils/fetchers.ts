import {NormalizeData} from '@/types';

const fetcherData = async (query : string) : Promise<NormalizeData[]>=>{
const url = `api/search?query=${encodeURIComponent(query)}`

 try {
const response = await fetch(url);
    if (!response.ok) {
       
        throw new Error("Connection issues....");
    }    
    const paperData = await response.json();
    const normalizeData = paperData.data.map((paper:any)=>{
        return {
    paperId : paper.paperId,
    author : paper.authors.map((a : any) => a.name).join(',') || [],
    title : paper.title || "unkown",
    source : paper.source || "SemanticScholar",
    abstract : paper.abstract || "No abstract available",
    url : paper.url || "no link provided",
    publishDate : paper.publicationDate || paper.year || "no publish Date provided",
    category :  paper.category || "Uncategorired",
    year: paper.year || "No year provided"
                
        }
    })
    return normalizeData

 } catch (error) {
    console.log("Error message" , error);
   return []; 
 }   
}
const getPaperById = async (id: string)=>{

      const allpaper = await fetcherData("");
        
        
    const foundPaper = allpaper.find((paper : NormalizeData) => paper.paperId === id);
   
    return foundPaper || null;

}

export {fetcherData ,  getPaperById }