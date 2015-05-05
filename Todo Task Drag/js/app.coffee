window.onload = ->
	todo = document.getElementById('todo-task')
	modelContent = document.querySelector('.model-content')

	field = document.querySelector('#newtodo')
	boxTodo = document.querySelectorAll('.box-todo')

	openAddTask = document.getElementById('add-task')
	closedAddTask = document.querySelector('.close-new-task');
	submit = document.getElementById('submit')
	form = document.querySelector('form')

	dragSearchElement = nulldragSearchElement = nulldragSearchElement = null
	arrayList = []

	openAddTask.onclick = ->
		showAddTask()
		return

	closedAddTask.onclick = ->
		hideAddTask()
		return

	showAddTask = () ->
		openAddTask.style.display = 'none'		
		form.style.display = 'block'
		return false

	hideAddTask = () ->
		form.style.display = 'none'
		openAddTask.style.display = 'block'		
		
		return false

	submit.onclick = ->


		text = document.getElementById('newtodo')
		if text.value != ''
			liClassName = 'box-todo'
			newTask = document.createElement 'LI'
			newTask.setAttribute 'class', liClassName
			newTask.setAttribute 'draggable', true
			newTask.innerHTML = '<a class="" title=""><div class="content-tasks"><p class="text-task">' + text.value + '</p></div></a>'
			newTask.addEventListener 'click', removeTask, false
			newTask.addEventListener 'dragstart', handleDragStart, false
			newTask.addEventListener 'dragenter', handleDragEnter, false
			newTask.addEventListener 'dragover', handleDragOver, false
			newTask.addEventListener 'dragleave', handleDragLeave, false
			newTask.addEventListener 'drop', handleDrop, false
			newTask.addEventListener 'dragend', handleDragEnd, false
			arrayList.push(newTask.innerHTML)
			
			if arrayList.length % 2 != 0 then newTask.style.background = '#fff' else newTask.style.background = '#ccc'

			todo.appendChild newTask
			text.value = ''
			text.focus()

			return false
		else
			return false
		
	handleDragStart = (evt) ->
		dragSearchElement = this
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

	removeTask = (evt) ->
		target = evt.target

		donetask = document.querySelector('#done-task');

		if (target.tagName == 'LI') 
      
		    if (target.className == 'box-todo done') 

		    	doneTask = document.createElement('LI')
		    	liClassName = 'box-done'
		    	doneTask.setAttribute('class',liClassName);
		    	doneTask.style.textDecoration = 'line-through';
		    	doneTask.innerHTML =  target.innerHTML;  
		    	donetask.appendChild(doneTask);        
		    	target.parentNode.removeChild(target);        
    		else
        		target.className = 'box-todo done';

	return