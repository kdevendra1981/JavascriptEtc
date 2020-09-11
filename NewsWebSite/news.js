let apiKey = '0fc1e4f36bc745ac8449a9afb217c969';
let url = `http://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=0fc1e4f36bc745ac8449a9afb217c969`;


let spinnerHTML = `<div class="spinner-grow" role="status">
<span class="sr-only">Loading...</span> 
</div>`
// myxhrOb.onprogress(function mySpinner());

parms={
    method:"GET",
    headers:{
        "Content-type":"application/json",
        "Access-Control-Allow-Headers":"*",
        "Access-Control-Allow-Origin":"*"}
        
}
function getData(){
    
    fetch(url,parms).then((Response)=>{
        if(Response == 200){
        return Response.json();
        }else{
            throw new Error('BAD http stuff')}
    }).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.log(`Error is: {error}`)
    });
}
getData();