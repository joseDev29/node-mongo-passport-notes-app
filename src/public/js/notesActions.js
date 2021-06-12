//Render Modal
function renderEditNoteForm(event, element) {
  event.preventDefault();
  const noteId = element.dataset.noteId;
  const noteTitle = document
    .getElementById(`title-${noteId}`)
    .textContent.trim();
  const noteDescription = document
    .getElementById(`description-${noteId}`)
    .textContent.trim();
  const modalContainer = document.getElementById("modalContainer");

  const editModalLayout = `
        <div class="note-edit-modal">
            <div class="edit-modal-btns">
                <a href="" class="edit-modal-save" onclick="updateNote(event, this)" data-note-id="${noteId}">Save</a>
                <a href="" class="edit-modal-cancel" onclick="closeEditNoteForm(event)">Cancel</a>
            </div>

            <input 
                type="text" 
                name="editModalTitle" 
                id="editModalTitle-${noteId}" 
                class="edit-modal-title"
                maxlength="75"
                value="${noteTitle}">
            </input>

            <textarea 
                name="editModalDescription" 
                id="editModalDescription-${noteId}" 
                class="edit-modal-description">${noteDescription}</textarea>
        </div>
    `;

  modalContainer.classList.toggle("modal-active");
  modalContainer.innerHTML = editModalLayout;
}

//Close Modal
function closeEditNoteForm(event) {
  event.preventDefault();
  const modalContainer = document.getElementById("modalContainer");

  modalContainer.innerHTML = "";
  modalContainer.classList.toggle("modal-active");
}

//CRUD OPERATIONS

//Create Note
async function createNote(event) {
  event.preventDefault();

  const title = document.getElementById("createNoteTitle").value;
  const description = document.getElementById("createNoteDescription").value;

  const note = {
    title,
    description,
  };

  const response = await window.fetch("/notes", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(note),
  });

  if (!response.ok) {
    alert("Error al crear la nota");
    return;
  }

  document.location.href = "/notes";
}

//Update Note
async function updateNote(event, element) {
  event.preventDefault();

  const noteId = element.dataset.noteId;

  const title = document.getElementById(`editModalTitle-${noteId}`).value;
  const description = document.getElementById(`editModalDescription-${noteId}`)
    .value;

  const note = {
    title,
    description,
  };

  const response = await window.fetch(`/notes/${noteId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(note),
  });

  if (!response.ok) {
    alert("error");
    return;
  }

  document.location.reload();
}

//Delete Note
async function deleteNote(event, element) {
  event.preventDefault();

  const noteId = element.dataset.noteId;

  const response = await window.fetch(`notes/${noteId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    alert("error");
    return;
  }

  document.location.reload();
}
