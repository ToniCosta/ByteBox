todoTask = ->
  todo = document.querySelector('#todo-task')
  modelContent = document.querySelector('.model-content')

  handleDragStart = (evt) ->
    `dragSearchElement = this`
    evt.dataTransfer.effectAllowed = 'move'
    evt.dataTransfer.setData 'text', @innerHTML
    return

  handleDragOver = (evt) ->
    if evt.preventDefault
      evt.preventDefault()
    evt.dataTransfer.dropEffect = 'move'
    false

  handleDragEnter = (evt) ->
    @className = 'box-todo over'
    return

  handleDragLeave = (evt) ->
    @className = 'box-todo'
    return

  handleDrop = (evt) ->
    @className = 'box-todo'
    if evt.stopPropagation
      evt.stopPropagation()
    if dragSearchElement != this
      dragSearchElement.innerHTML = @innerHTML
      @innerHTML = evt.dataTransfer.getData('text')
    false

  handleDragEnd = (e) ->
    @className = 'box-todo'
    return

  form = document.querySelector('form')
  field = document.querySelector('#newtodo')
  boxTodo = document.querySelectorAll('.box-todo')
  addTask = document.querySelector('.add-task')
  arrayList = []
  modelContent.addEventListener 'click', ((ev) ->
    liClassName
    target = ev.target
    if target.className == 'close-new-task'
      addTask.style.display = 'none'
      form.style.display = 'block'
    donetask = document.querySelector('#done-task')
    if target.tagName == 'LI'
      if target.className == 'box-todo done'
        doneTask = document.createElement('LI')
        liClassName = 'box-done'
        doneTask.setAttribute 'class', liClassName
        doneTask.style.textDecoration = 'line-through'
        doneTask.innerHTML = target.innerHTML
        donetask.appendChild doneTask
        target.parentNode.removeChild target
      else
        target.className = 'box-todo done'
    if target.className == 'add-task'
      addTask.style.display = 'none'
      form.style.display = 'block'
    if target.className == 'close-new-task'
      form.style.display = 'none'
      addTask.style.display = 'block'
    if target.id == 'submit'
      text = field.value
      if text != ''
        liClassName = 'box-todo'
        newTask = document.createElement('LI')
        count = 1
        newTask.setAttribute 'class', liClassName
        newTask.setAttribute 'draggable', true
        newTask.innerHTML = '<a class="" title=""><div class="content-tasks"><p class="text-task">' + text + '</p></div></a>'
        newTask.addEventListener 'dragstart', handleDragStart, false
        newTask.addEventListener 'dragenter', handleDragEnter, false
        newTask.addEventListener 'dragover', handleDragOver, false
        newTask.addEventListener 'dragleave', handleDragLeave, false
        newTask.addEventListener 'drop', handleDrop, false
        newTask.addEventListener 'dragend', handleDragEnd, false
        arrayList.push newTask.innerHTML
        todo.appendChild newTask
        i = 0
        while i < arrayList.length
          if i % 2 == 0
            newTask.style.background = '#fff'
          else
            newTask.style.background = '#ccc'
          i++
        field.value = ''
        field.focus()
    ev.preventDefault()
    return
  ), false
  dragSearchElement = null
  return
