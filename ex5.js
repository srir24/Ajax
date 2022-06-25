let fetchBtn = document.getElementById('getData');
fetchBtn.addEventListener('click', pullData)

function pullData() {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'https://dummy.restapiexample.com/api/v1/employees',true);
    xhr1.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }
    xhr1.send();
    console.log("We are done!");
}

let popBtn = document.getElementById('PostData');
popBtn.addEventListener('click', pushData);

function pushData() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }
    params = `{"name":"hello123","salary":"1245463","age":"21"}`;
    xhr.send(params);
}

