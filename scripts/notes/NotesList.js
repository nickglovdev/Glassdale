import { getNotes, useNotes } from "./NotesProvider.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        // Get the id of the criminal that was clicked
        const [prefix, criminalId] = clickEvent.target.id.split("--")

        // Yell at the system that a known associates button was clicked
        const deleteNote = new CustomEvent("knownNoteClicked", {
            // Make sure to tell the system exactly which criminal button was clicked
            detail: {
                chosenCriminal: criminalId
            }
        })
        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                render(updatedNotes())
            }
        )

        eventHub.dispatchEvent(deleteNote)
    }
})

/*
    State variables
*/
let visibility = false

/*
    Event handlers
*/
eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }

    getNotes().then(() => {
        const allTheNotes = useNotes()
        const allTheCriminals = useCriminals()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {

                // Find the criminal for the current note
                const theFoundCriminal = allTheCriminals.find(
                    (currentCriminalObject) => {
                        return currentNoteObject.criminal === currentCriminalObject.id
                    }
                )

                return Note(currentNoteObject, theFoundCriminal)
            }
        ).join("")
    })
}

export const NotesList = () => {
    render()
}
