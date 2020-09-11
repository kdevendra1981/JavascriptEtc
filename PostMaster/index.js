document.getElementById("custParaArea").style.display = "none";
document.getElementById("responseTextBlock").style.display = "none";


let jsonRadio = document.getElementById("JSON");
jsonRadio.addEventListener("click", () => {
    document.getElementById("custParaArea").style.display = "none";
    document.getElementById("jsonBlock").style.display = "block";

})

let customParaRadio = document.getElementById("CustPara")
customParaRadio.addEventListener("click", () => {
    document.getElementById("custParaArea").style.display = "block";
    document.getElementById("jsonBlock").style.display = "none";

})
let ParameterRowCounter = 2;

let addRowButton = document.getElementById("custParaBtn")
addRowButton.addEventListener("click", () => {
    console.log(`click event fired`);
    
    document.getElementById("custParaArea").style.display = "block";
    HTMLtext = `<div class="custText" id="CustParaID">
                    <legend>Parameter ${ParameterRowCounter}:</legend>
                    <input class="customParaText ParameterKey" type="text" name="key" id="key${ParameterRowCounter}" placeholder="key ${ParameterRowCounter}">
                    <input class="customParaText ParameterValue" type="text" name="value" id="value${ParameterRowCounter}" placeholder="value ${ParameterRowCounter}">
                    <input type="button" id="custParaBtn" class="custParaBtn btn deleteParam" value="-">
                </div>`
    ParameterRowCounter++;
    let parameterBlock = document.getElementById("custParaArea")
    let element = document.createElement("div")
    element.innerHTML = HTMLtext
    parameterBlock.appendChild(element)

    
    let deletePara = document.getElementsByClassName("deleteParam")
   
    for (item of deletePara) {
        item.addEventListener('click', (e) => {
           
            e.target.parentElement.remove();
            console.log(ParameterRowCounter);

        });

    }


});
let quare = undefined
// Click event of submit button
let submitBtn = document.getElementById("submitButton")
submitBtn.addEventListener("click", () => {
    
    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name=requestType]:checked").value
    let contentType = document.querySelector("input[name=contentType]:checked").value
    data = {};
    if (url.length != 0) {
        document.getElementById("responseTextBlock").style.display = "block";
        if (contentType == "JSON") {
            quary = document.getElementById("jsonText").value;
            
        }
        else {
            
            let keyArray = document.getElementsByClassName("ParameterKey");
            let valueArray = document.getElementsByClassName("ParameterValue");
           

            for (let i = 0; i < keyArray.length; i++) {
                data[keyArray[i].value] = valueArray[i].value;
            }
            quary = JSON.stringify(data)
        }

        if (requestType == "GET") {
            fetch(url, {
                mode: 'no-cors',
                method: "GET"
            }).then(response => response.text())
                .then((text) => {
                    document.getElementById("responseText").innerText = text;
                });

        }
        else {
            fetch(url, {
                method: "POST",
                body: quary,
                headers: { mode: 'no-cors',
                "content-type": "application/json; charset= utf-8"
                 }
            }).then(response => response.text())
                .then((text) => {
                    document.getElementById("responseText").innerText = text;
                    console.log("Response :", text);
                });
        }
    }

})

let resetBtn = document.getElementById("resetBtn")
resetBtn.addEventListener("click",()=>{
    document.getElementById("custParaArea").style.display = "none";
    document.getElementById("responseTextBlock").style.display = "none"

    console.log(`click event fired`);
})









