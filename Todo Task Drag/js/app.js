// Generated by CoffeeScript 1.9.1
window.onload = function() {
  var arrayList, boxTodo, closedAddTask, dragSearchElement, field, form, handleDragEnd, handleDragEnter, handleDragLeave, handleDragOver, handleDragStart, handleDrop, hideAddTask, modelContent, nulldragSearchElement, openAddTask, removeTask, showAddTask, submit, todo;
  todo = document.getElementById('todo-task');
  modelContent = document.querySelector('.model-content');
  field = document.querySelector('#newtodo');
  boxTodo = document.querySelectorAll('.box-todo');
  openAddTask = document.getElementById('add-task');
  closedAddTask = document.querySelector('.close-new-task');
  submit = document.getElementById('submit');
  form = document.querySelector('form');
  dragSearchElement = nulldragSearchElement = nulldragSearchElement = null;
  arrayList = [];
  openAddTask.onclick = function() {
    showAddTask();
  };
  closedAddTask.onclick = function() {
    hideAddTask();
  };
  showAddTask = function() {
    openAddTask.style.display = 'none';
    form.style.display = 'block';
    return false;
  };
  hideAddTask = function() {
    form.style.display = 'none';
    openAddTask.style.display = 'block';
    return false;
  };
  submit.onclick = function() {
    var liClassName, newTask, text;
    text = document.getElementById('newtodo');
    if (text.value !== '') {
      liClassName = 'box-todo';
      newTask = document.createElement('LI');
      newTask.setAttribute('class', liClassName);
      newTask.setAttribute('draggable', true);
      newTask.innerHTML = '<a class="" title=""><div class="content-tasks"><p class="text-task">' + text.value + '</p></div></a>';
      newTask.addEventListener('click', removeTask, false);
      newTask.addEventListener('dragstart', handleDragStart, false);
      newTask.addEventListener('dragenter', handleDragEnter, false);
      newTask.addEventListener('dragover', handleDragOver, false);
      newTask.addEventListener('dragleave', handleDragLeave, false);
      newTask.addEventListener('drop', handleDrop, false);
      newTask.addEventListener('dragend', handleDragEnd, false);
      arrayList.push(newTask.innerHTML);
      if (arrayList.length % 2 !== 0) {
        newTask.style.background = '#fff';
      } else {
        newTask.style.background = '#ccc';
      }
      todo.appendChild(newTask);
      text.value = '';
      text.focus();
      return false;
    } else {
      return false;
    }
  };
  handleDragStart = function(evt) {
    dragSearchElement = this;
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('text', this.innerHTML);
  };
  handleDragOver = function(evt) {
    if (evt.preventDefault) {
      evt.preventDefault();
    }
    evt.dataTransfer.dropEffect = 'move';
    return false;
  };
  handleDragEnter = function(evt) {
    this.className = 'box-todo over';
  };
  handleDragLeave = function(evt) {
    this.className = 'box-todo';
  };
  handleDrop = function(evt) {
    this.className = 'box-todo';
    if (evt.stopPropagation) {
      evt.stopPropagation();
    }
    if (dragSearchElement !== this) {
      dragSearchElement.innerHTML = this.innerHTML;
      this.innerHTML = evt.dataTransfer.getData('text');
    }
    return false;
  };
  handleDragEnd = function(e) {
    this.className = 'box-todo';
  };
  removeTask = function(evt) {
    var doneTask, donetask, liClassName, target;
    target = evt.target;
    donetask = document.querySelector('#done-task');
    if (target.tagName === 'LI') {
      if (target.className === 'box-todo done') {
        doneTask = document.createElement('LI');
        liClassName = 'box-done';
        doneTask.setAttribute('class', liClassName);
        doneTask.style.textDecoration = 'line-through';
        doneTask.innerHTML = target.innerHTML;
        donetask.appendChild(doneTask);
        return target.parentNode.removeChild(target);
      } else {
        return target.className = 'box-todo done';
      }
    }
  };
};
