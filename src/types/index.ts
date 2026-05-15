export interface NormalizeData {
    paperId ?:string,
    author ?:string,
    title ?: string,
    source ?:string,
    abstract ?:string,
    url ?:string,
    publishDate ?:string,
    category ?:string,
    year?: number;
}   

export interface MockData{
    count :number | 0,
    db_response_time_ms ?: number,
    page ?: number,
    per_page ?: number,
    groups_count ?: string,
    cost_usd ?: string
}
export interface PaperResponse{
normalizeData : NormalizeData[];
metaData : MockData | null    
}

export interface PaginationArray{
paginationArray: number[] 
totalItem:number   
}