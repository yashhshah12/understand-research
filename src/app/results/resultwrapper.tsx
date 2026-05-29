export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Suspense } from 'react'
import {Pagination} from '../../components/Pagination';

import {fetcherData} from '../../utils/fetchers';   
import {pagination} from '../../utils/pagination'
import {PaperCard} from '../../components/PaperCard';
import {NotFound} from '../../components/NotFound'
import { resolve } from 'path';



    const ResultWrapperPage  = async ({query , cleanNumber} : {query : string , cleanNumber: number})=>{
       
         
        let papers = await fetcherData(query , cleanNumber);        
        const paperData = papers.normalizeData || [];
        const totalCount = papers.metaData?.count || 0;
    
        const paginationArray = await pagination(totalCount , cleanNumber);
        const {pageNumberArray , totalPage} = paginationArray;
            

        return (
            paperData.length <= 0 ? (
                    <NotFound/>
            ) : (
                <>


                <PaperCard resultData={paperData}/>

                   <Suspense>
                <Pagination paginationArray={pageNumberArray}
                            totalItem={totalPage}/>
                </Suspense>
                </>
        )
    )}
    export {ResultWrapperPage}

