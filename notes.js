// =====================================
// PROFESSIONAL NOTES APP
// Part 1
// =====================================

const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const searchBox = document.getElementById("searchBox");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Save Notes
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Display Notes
function displayNotes() {

    notesContainer.innerHTML = "";

    if (notes.length === 0) {
        notesContainer.innerHTML =
        "<p style='color:white;text-align:center;'>No Notes Found</p>";
        return;
    }

    notes.forEach((note, index) => {

        const noteCard = document.createElement("div");
        noteCard.className = "note";

        noteCard.innerHTML = `
            <p>${note}</p>

            <div class="note-buttons">

                <button class="edit-btn"
                onclick="editNote(${index})">
                Edit
                </button>

                <button class="delete-btn"
                onclick="deleteNote(${index})">
                Delete
                </button>

            </div>
        `;

        notesContainer.appendChild(noteCard);

    });

}

// Add Note
addBtn.addEventListener("click", () => {

    const text = noteInput.value.trim();

    if (text === "") {
        alert("Please write a note.");
        return;
    }

    notes.unshift(text);

    saveNotes();

    displayNotes();

    noteInput.value = "";

});

// Delete Note
function deleteNote(index){

    if(confirm("Delete this note?")){

        notes.splice(index,1);

        saveNotes();

        displayNotes();

    }

}

// Edit Note
function editNote(index){

    noteInput.value = notes[index];

    notes.splice(index,1);

    saveNotes();

    displayNotes();

}

displayNotes();
// =====================================
// Part 2 Starts Here
// =====================================

// Live Search
searchBox.addEventListener("keyup", () => {

    const value = searchBox.value.toLowerCase();

    const allNotes = document.querySelectorAll(".note");

    allNotes.forEach(note => {

        const text = note.innerText.toLowerCase();

        if(text.includes(value)){

            note.style.display = "block";

        }else{

            note.style.display = "none";

        }

    });

});

// Ctrl + Enter = Save Note
noteInput.addEventListener("keydown", function(e){

    if(e.ctrlKey && e.key==="Enter"){

        addBtn.click();

    }

});

// Auto Focus
window.onload=function(){

    noteInput.focus();

};