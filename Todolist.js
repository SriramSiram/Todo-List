console.log("Hello");
const inputTextbox=document.getElementById("inputTextbox");
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", ()=>
{
    var todoValue = "";
    if(todoValue===inputTextbox.value){
        return;
    }
    var valueContainer = document.getElementById("valueContainer");
    console.log(valueContainer);
    
    var divClass = document.createElement("div");
    divClass.classList.add("space")
    valueContainer.appendChild(divClass);
    
    var inputElement=document.createElement("input");
    inputElement.classList.add("item1");
    
    inputElement.value = inputTextbox.value;
    divClass.appendChild(inputElement)
    //array.push(inputTextbox.value);
    
    var editElement=document.createElement("button");
    editElement.classList.add("editbutton");
    editElement.textContent = "Edit";
    divClass.appendChild(editElement)
    
    var deleteElement=document.createElement("button");
    deleteElement.classList.add("deletebutton");
    deleteElement.textContent = "Delete";
    divClass.appendChild(deleteElement)

    deleteElement.addEventListener("click",()=>
    {
        divClass.removeChild(inputElement);
        divClass.removeChild(editElement);
        divClass.removeChild(deleteElement);
    })

    inputElement.setAttribute('disabled', true)
        editElement.addEventListener("click",()=>{
            count=0;
            editElement.textContent="Save";
            inputElement.removeAttribute('disabled');
            editElement.addEventListener("click",()=>{
                count=1;
                editElement.textContent="Edit";
                inputElement.setAttribute('disabled',true);
                //editElement.textContent = "Edit"
            })
        })
    inputTextbox.value="";
});
