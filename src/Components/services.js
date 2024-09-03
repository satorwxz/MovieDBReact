export const apiUrl='https://api.themoviedb.org/3/'
export const apiKey='api_key=115d354eea21c9f8228ee5e508779f52'
export const originalPath='https://image.tmdb.org/t/p/original/'
export const originalPathPeople='https://image.tmdb.org/t/p/original'
export const smallPath='https://image.tmdb.org/t/p/w500/'

export const handleGenerateApi = (endpoint,page) => {
   if(page){
       return `${apiUrl}${endpoint}?${apiKey}&page=${page}`;

   }else{
       return `${apiUrl}${endpoint}?${apiKey}`;
   }
}
export const handleSearchApi = (endpoint,query) => {
    return `
    ${apiUrl}${endpoint}?${apiKey}&query=${query}
    `
}


export const handleShortDescription = (str) => {
    if(str.length > 100 ){
        return str.slice(0,100) + '...'
    }else{
        return str
    }
}