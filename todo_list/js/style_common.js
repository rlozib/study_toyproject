//하나만 선택됨
// document.querySelector(".todo-btn").addEventListener("click", () =>{
//     document.querySelector(".input-form").classList.toggle("show");
//     document.querySelector(".todo-btn").classList.toggle("rotate");
// });

document.querySelectorAll(".todo-btn").forEach((el, index) => {
    el.addEventListener("click", function(){
        this.classList.toggle("show");
        this.classList.toggle("rotate");
            
        this.previousElementSibling.querySelector(".input-form").classList.toggle("show");
        console.log(this.previousElementSibling.querySelector(".todo-btn"));
    });
});

$(document).ready(function(){
    $(".addBtn").click(function(){
        $(".cardWrap").append(`<form class="todo-box" method="post">
        <input type="text" id="titleSpace" placeholder="제목을 입력하세요">
        <div class="currentDate">date(auto)</div>
        <div class="n-task">할 일 n개 남음</div>
        <hr>
        
        <div class="list-wrap">
            <div class="list">
                <input type="checkbox" id="chk1" value="">
                <label for="chk1">할 일을 적어봅시다.</label>
                <span class="trash-btn"></span>
            </div>
            
            <div class="input-form">
                <input type="text" id="inputBox" placeholder="할 일을 입력 후, Enter를 누르세요">
            </div>    
        </div>
        <a href="#c" class="todo-btn"></a>    
    </form>`);
    });
});

// document.querySelector(".addBtn").addEventListener("click", function(){
//     document.querySelector(".todo-box").classList.add("addBox");
// });



const addBtn = document.querySelector('.addBtn');
const delBtn = document.querySelector('.delBtn');
const toDoBtn = document.querySelectorAll('.todo-btn');




