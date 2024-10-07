function makeApiCall(url,callback){
    fetch(url)
    .then(response=>response.json)
}