import { NextResponse } from "next/server";


export async function Get(request : Request){
const {searchParams} = new URL(request.url);
const query = searchParams.get("q");
if (!query) {
    return NextResponse.json({error : "A search query is required" } , { status : 400})
}

const url = `https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(query)}&limit=10&fields=paperId,title,authors,year,abstract,url`
try{
const response = await fetch(url , {
    headers:{
        "x-api-key":process.env.SEMANTIC_SCHOLAR_API_KEY || ""
    }
});
if (!response.ok) {
    return NextResponse.json(
        {error : `Semantic Scholar failed with status ${response.status}`},
        {status : response.status}
    )

}
const apidata = await response.json();

return NextResponse.json(apidata)


}
catch (error){
    return NextResponse.json({error: "Internal server error"} , {status : 500})
    
}

}

