
shownotes() //to upload all notes while loading a new page

// while clicking on add button extract list from local storage and push new item in that list and save again to local storage
let addbtn = document.getElementById('addBtn');//getting add button which is below the note
addbtn.addEventListener('click', (e) => {
    let addtxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle')
    if (addtxt.value == '' || addTitle == null){
        alert("Please Enter a Note and Title:")
        return
    }
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    let dateVal = localStorage.getItem("dateVal")
    
    if (notes == null || title == null || dateVal == null) {
        notesObj = [];
        titleObj = [];
        dateObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titleObj = JSON.parse(title);
        dateObj = JSON.parse(dateVal);
    }
    notesObj.push(addtxt.value);
    titleObj.push(addTitle.value);
    dateObj.push(getDateFormat())
    localStorage.setItem('notes', JSON.stringify(notesObj));
    localStorage.setItem('title', JSON.stringify(titleObj));
    localStorage.setItem('dateVal', JSON.stringify(dateObj));
    
    addtxt.value = '';
    addTitle.value = '';
    shownotes();
    
});

// shownotes function shows all the notes on web page which are sotred in local storage
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    if (notesObj.length == 0) {
        let notesContainer = document.getElementById('notes');
        notesContainer.innerHTML = `No notes to show!`
    }
    else {
        let notesContainer = document.getElementById('notes');
        notesContainer.innerHTML = '';
    }

    notesObj.forEach((element, index) => {
        htmlText = `
            <div class="forsearch alert alert-primary" width = "screen-width" style="inline" name="savedNotes" float="left" >
                <p  id=${index + 1}> Note-<em> ${getMyDate(index)} </em>:<strong> <i>${getTitle(index)} <i>: ${element}</strong></p>
            
                <input id = ${index} class="alert alert-primary" type="button" value="Delete" onclick="deteleNote(this.id)">
            </div>
            `
        let notesContainer = document.getElementById('notes');
        notesContainer.innerHTML += htmlText;
    });
}


// this funcation change the format of current datetime and return it as string
function getDateFormat(){
    let d = new Date()
    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}

// this funcation returns the date of the given index value
function getMyDate(myindex){
    let myDate = localStorage.getItem("dateVal");
       if (myDate == null) {
       dateObj = [];
    }
    else {
        dateObj = JSON.parse(myDate);
    }
    return dateObj[myindex]
}

// this function returns the title of the given index value
function getTitle(getindex){
    let title = localStorage.getItem("title");
    if (title == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(title);
    }
    return titleObj[getindex]
}

// deleteNote function detetes the note which is clicked on delete
function deteleNote(index) {
    let noteArray = JSON.parse(localStorage.getItem("notes"));
    let titleArray = JSON.parse(localStorage.getItem("title"));
    let dateArray = JSON.parse(localStorage.getItem("dateVal"));
    noteArray.splice(index, 1);
    titleArray.splice(index, 1);
    dateArray.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(noteArray));
    localStorage.setItem('title', JSON.stringify(titleArray));
    localStorage.setItem('dateVal', JSON.stringify(dateArray));
    shownotes();
}

// searching while typing and hiding if the content does not match the search text
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener('input', function (){
    let searchVal = searchTxt.value;
 
    let noteList = document.getElementsByClassName("forsearch");
    
    Array.from(noteList).forEach(function (element) {
     
        let paraText = element.getElementsByTagName("p")[0].innerText
   
        if (paraText.includes(searchVal)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none";
        }

    });
});

// let myTextAreas = document.getElementsByClassName("noteheader");
// // console.log(myTextAreas,myTextAreas.length)
// for(let i=0;i<myTextAreas.length;i++){
//     console.log(myTextAreas[i].value)
//     myTextAreas[i].addEventListener('click',function (e){
//         if (myTextAreas[i].value == "Title" || myTextAreas[i].value == "Note Here"){
//            myTextAreas[i].value=''
//         }
//     });
// }