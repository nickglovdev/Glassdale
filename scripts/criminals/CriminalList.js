import { criminalHtml } from "./Criminal.js"
import { useCriminals } from "./criminalsDataProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")

export const criminalList = () => {
    const arrayOfCriminalObjects = useCriminals()

    for (const criminalObject of arrayOfCriminalObjects) {
        //make an html representation of a criminal
        const htmlRepresentationOfCriminal = criminalHtml(criminalObject)
        //put that html representation on the DOM
        contentTarget.innerHTML += htmlRepresentationOfCriminal

    }
}