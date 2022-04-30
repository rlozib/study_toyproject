const addBtn = document.querySelector('.addBtn');
const delBtn = document.querySelector('.delBtn');
const toDoBtns = document.querySelectorAll('.todoBtn');

//버튼 클릭시 박스 생성
addBtn.addEventListener('click', addToDoBox);
delBtn.addEventListener('click', deleteToDoBox);

//변수
let isNewBox = false;



//하나만 선택됨
// document.querySelector(".todoBtn").addEventListener("click", () =>{
//     document.querySelector(".input-form").classList.toggle("show");
//     document.querySelector(".todoBtn").classList.toggle("rotate");
// });

// document.querySelectorAll(".todoBtn").forEach((el, index) => {
//     el.addEventListener("click", function () {
//         this.classList.toggle("show");
//         this.classList.toggle("exitToDo");

//         this.previousElementSibling.querySelector(".inputForm").classList.toggle("block");
//         console.log(this.previousElementSibling.querySelector(".todoBtn"));
//     });
// });


//todoBox 그리기
function addToDoBox() {
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    const date = new Date();
    const boxNo = myToDoLists.length == 0 ? 0 : myToDoLists.length;

    let txt =
        `<input type="checkbox" id="box${boxNo}" class="checkBoxs" disabled>
        <div class="boxWrap">
            <div class="title">
                <div class="in">
                    <input class="inputTit autofocus" type="text" placeholder="제목을 입력해 주세요." onkeyup="enterCheck();" />
                    <div class="date">${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${dayList[date.getDay()]}요일 </div>
                    <div class="listCount">할 일 <i>0</i>개 남음</div>
                </div>
            </div>
            <hr>
            <div class="listWrap">
                <div class="in">
                    <ul>          
                    </ul>
                </div>
            </div>
            <div class="inputForm">
                <div class="in">
                    <input class="inputBox" type="text" placeholder="할 일을 입력 후, Enter를 누르세요" onkeyup="enterCheck();" />
                </div>
            </div>
            <button class="todoBtn addToDo" onclick="javascript:toDoBtnClick(this);" type="button"></button>
        </div>`;


    if (!isNewBox) {
        const label = document.createElement('label');
        label.classList.add('todoBox');
        label.htmlFor = 'boxWrap' + myToDoLists.length;
        label.innerHTML = txt;
        document.querySelector('.cardWrap').appendChild(label);
        document.querySelector('.autoFocus').focus();
    } else {
        alert('이미 새로운 To Do List가 존재합니다. \n제목을 입력 후 Enter를 눌러주세요.')
    }

    isNewBox = true;
}



function toDoBtnClick(btn) {
    const $toDoBtn = btn;


    if (!isNewBox) {
        $toDoBtn.classList.toggle('addToDo');
        $toDoBtn.classList.toggle('exitToDo');

        if (!$toDoBtn.classList.contains('addToDo')) {
            $toDoBtn.previousElementSibling.style.display = "block";
            
        } else {
            $toDoBtn.previousElementSibling.style.display = "none";
        }
    } else {
        alert('할 일 박스의 제목을 먼저 입력하세요. \n제목을 입력 후 Enter를 눌러주세요.')
    }
}

function enterCheck() {
    const target = window.event.target;
    const keyCode = window.event.keyCode;

    if ( keyCode == 13 && target.classList.contains('.inputTit') ) {
        const div = document.createElement('div');
        div.classList.add('tit');
        div.innerText = target.value;
        target.before(div);
        addLocalToDoBox(target.value, target.nextElementSibling.innerText);
        target.remove();
        isNewBox = false;
    }

    if( keyCode == 13 && target.classList.contains('.inputBox') ){
        const text= target.value;
        const no = target.closest('.todoBox').htmlFor.slice(-1);

        addLocalToDoBox(text, no);
    }
}

function deleteToDoBox() {
    let isChk = false;
    const checkBoxs = document.querySelectorAll('.checkBoxs');

    if(!delBtn.classList.contains('active')){
        delBtn.classList.add('active');
        checkBoxs.forEach(function (checkBox) {
            checkBox.disabled = false;
        });
    } else {
        
        for(var i=0; i<checkBoxs.length; i++){
            if(checkBoxs[i].checked == true) {
                isChk = true;
                break;
            }
        }

        if(isChk) {
            modalOpen('#delModal');
        } else {
            checkBoxs.forEach(function (checkBox) {
                checkBox.disabled = true;
            });

            delBtn.classList.remove('active');
        }
    }
}






// $(document).ready(function () {
//     $(".addBtn").click(function () {
//         $(".cardWrap").append(`<form class="todo-box" method="post">
//         <input type="text" id="titleSpace" placeholder="제목을 입력하세요">
//         <div class="currentDate">date(auto)</div>
//         <div class="n-task">할 일 n개 남음</div>
//         <hr>

//         <div class="list-wrap">
//             <div class="list">
//                 <input type="checkbox" id="chk1" value="">
//                 <label for="chk1">할 일을 적어봅시다.</label>
//                 <span class="trash-btn"></span>
//             </div>

//             <div class="input-form">
//                 <input type="text" id="inputBox" placeholder="할 일을 입력 후, Enter를 누르세요">
//             </div>    
//         </div>
//         <a href="#c" class="todoBtn"></a>    
//     </form>`);
//     });
// });











//안됨
// document.querySelector(".addBtn").addEventListener("click", function(){
//     document.querySelector(".todo-box").classList.add("addBox");
// });