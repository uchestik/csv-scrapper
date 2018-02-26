const baseUrl = `http://localhost:5000/api/csv`


export function getCsv(){
    const request = fetch(baseUrl,{method:'GET'})
    .then(res=>res.json())

    return {
        type:'GET_CSV',
        payload:request

    }
}