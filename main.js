// 유저는 할일을 추가할 수 있다
// 각 할일에 삭제와 체크버튼이 있다.
//삭제버튼을 클릭하면 할일이 리스트에서 삭제된다
// 체크버튼을 누르면 할일이 끝난 것으로 간주하고 밑줄이 간다
// 끝난 할일은 되돌리기 버튼을 누르면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 확인 할 수 있는 반응형 웹이다.

// 객체를 생각하면서 todolist를 만들어보자

let inputTask = document.getElementById("input-area");
let addButton = document.getElementById("add-button");
let taskList = [];
addButton.addEventListener("click", onAdd);

function onAdd() {
  let task = {
    id: randomId(),
    taskContent: inputTask.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function randomId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
function render() {
  let resultHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task-area">
    <div class="task-done">${taskList[i].taskContent}</div>
    <div>
      <button  class="check-button" onClick = "onComplete('${taskList[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
      <button class="trash-button" onClick = "onDelete('${taskList[i].id}')"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>`;
    } else {
      resultHTML += `<div class="task-area">
    <div>${taskList[i].taskContent}</div>
    <div>
      <button class="check-button" onClick = "onComplete('${taskList[i].id}')"><i class="fa-solid fa-check"></i></button>
      <button class="trash-button"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function onComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}
