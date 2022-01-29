let list = document.querySelector("#to-do-list");
let addInput = document.querySelector("#add-form input");
let addBtn = document.querySelector("#add-form button");
let searchInput = document.querySelector("#search-form input")



list.addEventListener("click",(e)=>{
   if(e.target.nodeName == "SPAN" && e.target.className == "delete-btn" ){
        e.target.parentNode.remove();
        if(list.children.length == 0){
           let Msg = document.createElement("div")
            Msg.style.textAlign = "center";
            Msg.style.color = "#333"
            Msg.id = "MsgId"
            Msg.innerText = "The List Is Empty!"
            list.appendChild(Msg)
        }

   }
})

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    if(!addInput.value){
        return
    }

    if(document.getElementById("MsgId")){
        document.getElementById("MsgId").remove()
    }

    list.appendChild(createListItem(addInput.value))
    addInput.value = ""

    function createListItem(inputVal){
         let listItem = document.createElement("LI");
         let title = document.createElement("SPAN");
         let deleteItem = document.createElement("SPAN");

         listItem.className = "to-do-item"
         title.className =  "title"
         title.innerText = inputVal
         deleteItem.className = "delete-btn"
         deleteItem.innerText = "delete"

         listItem.appendChild(title)
         listItem.appendChild(deleteItem)
         return listItem
    }
})

searchInput.addEventListener("input" , (e)=>{

    Array.from(list.children).forEach(element => {
        if(document.getElementById("MsgId")){
            return
        }

        if(element.querySelector(".title").innerText.toLowerCase().charAt(0).includes(e.target.value.toLowerCase().charAt(0))){
            element.style.display = "flex"
        }
        else{
            element.style.display = "none"
        }
    });
})