url = 'https://reqres.in/api/users'
data = `{
    "name": "devendra",
    "job": "programmer"
}`
params={
    method: 'post',
    headers: {
        
        'content-type':'application/json'
    },
    body: data
}

function postMyData(){
    fetch(url,params).then(Response=> Response.json())
    .then(data=>console.log(data));
}
postMyData();
