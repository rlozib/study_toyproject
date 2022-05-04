const addBtn = document.querySelector('.addBtn');
const delBtn = document.querySelector('.delBtn');
const toDoBtns = document.querySelectorAll('.todoBtn');

//버튼 클릭시 박스 생성
addBtn.addEventListener('click', addToDoBox);
delBtn.addEventListener('click', deleteToDoBox);

//변수
let isNewBox = false;






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
                    <input class="inputTit autoFocus" type="text" placeholder="제목을 입력해 주세요." onkeyup="enterCheck();" />
                    <div class="date">${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${dayList[date.getDay()]}요일 </div>
                    <div class="listCount">할 일 <i>0</i>개 남음</div>
                </div>
            </div> 
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
            $toDoBtn.previousElementSibling.style.display = 'block'; 
        } else {
            $toDoBtn.previousElementSibling.style.display = 'none';
        }
    } else {
        alert('할 일 박스의 제목을 먼저 입력하세요. \n제목을 입력 후 Enter를 눌러주세요.')
    }
}

function enterCheck() {
    const target = window.event.target;
    const keyCode = window.event.keyCode;


    //to do list 박스 추가시 타이틀 입력
    if ( keyCode == 13 && target.classList.contains('inputTit') ) {
        const div = document.createElement('div');
        div.classList.add('tit');
        div.innerText = target.value;
        target.before(div);
        addLocalToDoBox(target.value, target.nextElementSibling.innerText);
        target.remove();
        isNewBox = false;
    }

    //to do list의 새로운 할 일 입력시
    if( keyCode == 13 && target.classList.contains('inputBox') ){
        const text= target.value;
        const no = target.closest('.todoBox').htmlFor.slice(-1);

        addLocalToDo(text, no);
    }
}

function deleteToDoBox() {
    let isChk = false;
    const checkBoxs = document.querySelectorAll('.checkBoxs');
    // active가 없을 때
    // 1. active 추가
    // 2. list 선택 가능
    // active가 있을 때
    // 1. 모달창 뜸
    // 1-1. 예 : 선택된 모달창 삭제
    // 1-2. 아니오 : 선택된 모달창 해제
    // 3. active 제거

    if(!delBtn.classList.contains('active')){
        delBtn.classList.add('active');
        checkBoxs.forEach(function (checkBox) {
            checkBox.disabled = false;
        });
    } else {

        for(var i=0;i<checkBoxs.length;i++){
            if(checkBoxs[i].checked == true){
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






