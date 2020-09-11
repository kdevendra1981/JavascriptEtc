//first we create a Xhr object


let btnFetch = document.getElementById('btnFetch')
btnFetch.addEventListener('click', setDataToPage);
let tableBody = document.getElementById('tableBody');
// tableBody.innerHTML = ''
function setDataToPage() {
    let myData = [];
    let myXhrOb = new XMLHttpRequest();
    myXhrOb.open('GET', `https://learnwebcode.github.io/json-example/animals-3.json`, true);
    myXhrOb.onprogress=(console.log("Work in Progress..."))
    myXhrOb.onload = function () {
        myData = JSON.parse(myXhrOb.responseText);
        console.log(myData);
        addHTML(myData);
    };
    myXhrOb.send();
}
    function addHTML(myData){
       for(let index=0; index<myData.length;index++){
            console.log(`index value is ${index}`);
            HtmlText = createTag(myData,index)
            tableBody.innerHTML += HtmlText;
    }

    function createTag(myData, index){
        myText = `<tr>
        <th scope="row">${index}</th>   
        <td>${myData[index].name}</td>
        <td>${myData[index].species}</td> 
        <td>`
        for(i=0;i<myData[index].foods.likes.length;i++){
            myText = myText + myData[index].foods.likes[i]+' ';
        }
        myText += '</td><td>'
        for(i=0;i<myData[index].foods.dislikes.length;i++){
            myText = myText + myData[index].foods.dislikes[i]+' ';
        }
        myText += '</td></tr>'

        return myText

    }

}