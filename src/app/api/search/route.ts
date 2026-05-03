
import { NextResponse } from "next/server";


export async function GET(request : Request){
const {searchParams} = new URL(request.url);
const query = searchParams.get("q");
if (!query) {
    return NextResponse.json({error : "A search query is required" } , { status : 400})
}

const externalapi = `https://api.openalex.org/works?search=${query}&per-page=10`;
try{
    const response = await fetch(externalapi);
    if (!response.ok) {
        return NextResponse.json(
        {error: `openalex failed with status ${response.status}`},
        {status: response.status})
    }
    const opexAlex = await response.json();

      const normalizeData = opexAlex.results.map((paper:any)=>{
            return {
        paperId : paper.id ? paper.id.split("/").pop() : "No id provided",
        author : paper?.authorships?.map((a : any) => a.author.display_name).join(',') || "No author available ",
        title : paper?.title || "unkown",
        source : paper?.source || "Openalax",
        abstract : paper?.abstract || "No   abstract available",
        url : paper?.url || "no link provided",
        publishDate : paper?.publication_date || paper.year || "no publish Date provided",
        category :  paper?.category || "Uncategorired",
        year: paper?.publication_year || "No year provided"
                    
            }
        })



    return NextResponse.json({data : normalizeData});


}catch(error :any){
console.log(error.message , "This is route error message");

    return NextResponse.json({error : "Internal server error" } ,{status : 500});

}


// const url = `https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(query)}&limit=10&fields=paperId,title,authors,year,abstract,url`
// try{
// const response = await fetch(url , {
//     headers:{
//         "x-api-key":process.env.SEMANTIC_SCHOLAR_API_KEY || ""
//     }
// });
// if (!response.ok) {
//     return NextResponse.json(
//         {error : `Semantic Scholar failed with status ${response.status}`},
//         {status : response.status}
//     )

// }
// const apidata = await response.json();

// return NextResponse.json(apidata)


// }
// catch (error){
//     return NextResponse.json({error: "Internal server error"} , {status : 500})
    
// }

}

