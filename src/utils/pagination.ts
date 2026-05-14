//totalIterm represent the total number of item
//currentPage represent the current page of the application
//pageSize represent the toal number of item in one page
// totalPage represent the total number of page for total item of result
//currentGroup represent the currecnt group of pagination
const pagination = (totalItem:number , currentPage:number) =>{
const pagePergroup = 5;
const pageSize = 20
const totalPage = Math.ceil(totalItem / pageSize);
const currentGroup = Math.ceil(currentPage / pagePergroup)
const startIndex = (currentGroup - 1) * pagePergroup + 1

const endIndex = Math.min(startIndex + pagePergroup - 1 , totalPage)
const page  =[]
for(let i = startIndex ; i <= endIndex ; i++){
    page.push(i);
}


return page
}
export  {pagination}