// TODO application

let form = document.getElementById("form");
let input = document.getElementById("input");
let msgs = document.getElementById("msg");
let posts = document.getElementById("posts");

console.log(form);
console.log(input);
console.log(msgs);
console.log(posts);

form.addEventListener("submit", (e)=>{

e.preventDefault()
console.log("button clicked");
formValidation();

});

let formValidation = ()=>{
    if(input.value === ""){
        msgs.innerHTML= "TODO cant be blank";
        console.log("failed");
    }
    else{
        console.log("success");
        msgs.innerHTML= " ";
        acceptData();
        createPosts();
    }
}


let data = {};
let acceptData= ()=>{
    data["text"] = input.value;
    console.log(data);
}

let createPosts = ()=>{
    posts.innerHTML +=`
    <div>
    <p>${data.text}</p>
            <span class="options">
                <i onClick="editPost(this)"class="fas fa-edit"></i>
                <i onClick="deletePost(this)"class="fas fa-trash-alt"></i>
            </span>
    </div>`;
    input.value="";
}


let deletePost = (e)=> {
    e.parentElement.parentElement.remove();
}

let editPost = (e)=> {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}