import {NormalizeData} from '@/types';

const fetcherData = async (query : string) : Promise<NormalizeData[]>=>{
const url = `http://localhost:3000/api/search?q=${encodeURIComponent(query)}`

 try {
const response = await fetch(url);
    if (!response.ok) {
       
        throw new Error("Connection issues....");
    }    
    const paperData = await response.json();
    return paperData.data;

 } catch (error:any) {
    console.log("Error message" , error);
   return []; 
 }   
}
const getPaperById = async (id: string)=>{
      const allpaper = await fetcherData("");
    const foundPaper = allpaper.find((paper : NormalizeData) => paper.paperId === id);
   console.log(foundPaper , "this is fetcher function");
   
    return foundPaper || null;

}

export {fetcherData ,  getPaperById }