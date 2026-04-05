import {NormalizeData} from '@/types';
const fetcherData = async (query : string) : Promise<NormalizeData[]>=>{
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve([
        {
             id:'arxis-123',
    author:['Dr Alan turing' , 'Grace Hopper'],
    title : `Biological Systems and ${query ? query : 'Neural'} Networks`,
    source : 'Arxis',
    abstract:  'This paper explores the fundamental shifts in computational architecture...',
    url:'https://arxiv.org',
    publishDate: '2026-04-01',
    category:'Computer Science',
        },
        {
            id:'arxis-123',
    author:['Dr Alan turing' , 'Grace Hopper'],
    title : `Biological Systems and ${query ? query : 'Neural'} Networks`,
    source : 'Arxis',
    abstract:  'This paper explores the fundamental shifts in computational architecture...',
    url:'https://arxiv.org',
    publishDate: '2026-04-01',
    category:'Computer Science',
        }
            

        ])


    },1000)
})

}

export {fetcherData}