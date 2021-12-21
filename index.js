const state = {
    modal: '',
    savedNotes: [
        {
            title: 'learn js',
            note: 'learn js more'
        },
        {
            title: 'celebrate',
            note: 'train'
        },
        {
            title: 'learn react',
            note: 'practice'
        },
        {
            title: 'learn react mroee',
            note: 'practice-moreee'
        },
        {
            title: 'learn react mroee',
            note: 'practice-moreee'
        }
    ]
}

function renderNotes() {


    const noteTable = document.createElement('ul')
    noteTable.setAttribute('class', 'note-table')

    const tableRow = document.createElement('li')
    tableRow.setAttribute('class', 'note-li')

    const noteTitle = document.createElement('span')
    noteTitle.setAttribute('class', 'note-title')
    noteTitle.textContent = 'Title'

    const noteContent = document.createElement('span')
    noteContent.setAttribute('class', 'note-content')
    noteContent.textContent = 'Note'

    noteTable.append(tableRow)
    tableRow.append(noteTitle, noteContent)

    for (const newnote of state.savedNotes) {
        //create a li element
        const liEl = document.createElement('li')
        liEl.setAttribute('class', 'note-li')
        //create two spans -> newnote.title & newnote.note
        const titleSpan = document.createElement('span')
        titleSpan.textContent = newnote.title
        const noteSpan = document.createElement('span')
        noteSpan.textContent = newnote.note
        //append spans inside li
        liEl.append(titleSpan, noteSpan)
        //append li itself inside ul
        noteTable.append(liEl)
    }



    document.body.append(noteTable)
}

function renderAddNote() {
    const addNoteHeader = document.createElement('div')
    addNoteHeader.setAttribute('class', 'add-note')

    const buttonAdd = document.createElement('button')
    buttonAdd.setAttribute('class', 'add-note-button')
    buttonAdd.textContent = 'Add Note'

    buttonAdd.addEventListener('click', function () {
        state.modal = 'Add Note'
        render()
    })

    addNoteHeader.append(buttonAdd)
    document.body.append(addNoteHeader)

}

function renderModal() {

    if (state.modal !== 'Add Note') return

    const addModal = document.createElement('div')
    addModal.setAttribute('id', 'addModal')
    addModal.setAttribute('class', 'addModal')

    const modal = document.createElement('div')
    modal.setAttribute('class', 'modal')

    const addNoteModal = document.createElement('h1')
    addNoteModal.textContent = 'Add Note'

    const formNote = document.createElement('form')
    formNote.setAttribute('class', 'note-form')
    formNote.addEventListener('submit', function (e) {
        e.preventDefault()


        //create a new note object with user;s input
        const usersNote = {
            title: inputTitle.value,
            note: inputNote.value
        }
        // adding stuff to an array -> savedNotes.push
        state.savedNotes.push(usersNote)

        render()
    })

    const labelTitle = document.createElement('label')
    labelTitle.setAttribute('for', 'title')
    labelTitle.textContent = 'Title'

    const inputTitle = document.createElement('input')
    inputTitle.setAttribute('type', 'text')
    inputTitle.setAttribute('id', 'title')

    const labelNote = document.createElement('label')
    labelNote.setAttribute('for', 'note')
    labelNote.textContent = 'Note'

    const inputNote = document.createElement('input')
    inputNote.setAttribute('type', 'text')
    inputNote.setAttribute('id', 'note')

    const inputSubmit = document.createElement('input')
    inputSubmit.setAttribute('type', 'submit')
    inputSubmit.setAttribute('id', 'submit')

    const cancelButton = document.createElement('button')
    cancelButton.textContent = 'Cancel'
    cancelButton.addEventListener('click', function () {
        state.modal = ''
        render()
    })

    addModal.append(modal)
    modal.append(addNoteModal, formNote)

    formNote.append(labelTitle, inputTitle, labelNote, inputNote, inputSubmit, cancelButton)
    document.body.append(addModal)

}

function render() {
    document.body.innerHTML = ""
    renderAddNote()
    renderModal()
    renderNotes()


}

render()
render()
render()