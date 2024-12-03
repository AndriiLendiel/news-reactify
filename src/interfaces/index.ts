
export interface INews {

    author: string,
    category: string | null,
    description?: string,
    id: string,
    image: string,
    language: string,
    published: string,
    title: string,
    url: string
}

export interface NewsApiResponse {
    news: INews[];
    page: number,
    status: string
}

export interface CategoriesApiResponse {
    categories: string[];
    description: string,
    status: string
}

export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'

export interface IPaginationProps {
  totalPages: number,
  handleNextPage: ()=> void,
  handlePrevPage: ()=> void,
  handlePageClick: (page:number)=> void,
    currentPage: number

}

export interface IFilters {
    page_number: number;
    page_size: number;
    category: string | null;
    keywords: string;
}

export type ParamsType = Partial<IFilters>


export interface IBanner{
    bannerID: string,
    [key: string]:string|number|null
}
const banner: IBanner = {
    bannerID: '1',
    test: null,
    test1: '22',
    test2: 22
    
}








