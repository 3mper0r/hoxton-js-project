const state = {
    modal: '',
    savedNotes: [
        {
            title: '',
            note: ''
        }
    ]
}

{/* <div class="add-note">
        <a href="#addModal"><button>Add Note</button></a>
    </div> */}

function renderNotes() {

    // create the table
    // create a TR(row) for each note

    //append table to body

}

function renderAddNote() {
    const addNoteHeader = document.createElement('div')
    addNoteHeader.setAttribute('class', 'add-note')

    const alink = document.createElement('a')
    alink.setAttribute('href', '#addModal')
    const buttonAdd = document.createElement('button')
    buttonAdd.textContent = 'Add Note'

    buttonAdd.addEventListener('click', function () {
        state.modal = 'Add Note'
        render()
    })



    alink.append(buttonAdd)
    addNoteHeader.append(alink)
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

    const labelTitle = document.createElement('label')
    labelTitle.setAttribute('for', 'title')
    labelTitle.textContent = 'Title'

    const inputTitle = document.createElement('input')
    inputTitle.setAttribute('type', 'text')
    inputTitle.setAttribute('id', 'title')

    const labelNote = document.createElement('input')
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

    // < div id = "addModal" class="addModal" >
    //     <div class="modal">
    //         <h1 class="header">
    //             Add Note
    //         </h1>
    //         <form class="note-form" action="">
    //             <label for="title">Title</label>
    //             <input type="text" name="" id="title">
    //             <label for="note">Note</label>
    //             <input type="text" name="" id="note">
    //             <input type="submit" name="" id="submit">
    //             </form>
    //      </div>
    //             </div>


    addModal.append(modal)
    modal.append(addNoteModal, formNote)

    formNote.append(labelTitle, inputTitle, inputNote, inputSubmit, cancelButton)
    document.body.append(addModal)

}

function render() {
    document.body.innerHTML = ""
    renderAddNote()
    renderNotes()
    renderModal()

}

render()
render()
render()
render()
render()