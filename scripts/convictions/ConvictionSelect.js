const eventHub = document.querySelector(you_fill_this_in)
const contentTarget = document.querySelector(".filters__crime")

// On the content target, listen for a "change" event.
contentTarget.addEventListener("which event?", event => {

    // Only do this if the `crimeSelect` element was changed
    if (you_fill_this_in) {
        // Create custom event. Provide an appropriate name.

        // Dispatch to event hub
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(crime => {                       
                return `<option> ${crime.name} </option>`
            }) }
            
        </select>
        `
}


const ConvictionSelect = () => {
    const convictions = useConvictions()
    render(convictions)
}

/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
// import { useConvictions } from "./ConvictionProvider.js"

// // Get a reference to the DOM element where the <select> will be rendered
// const contentTarget = document.querySelector(".filters__crime")

// const ConvictionSelect = () => {
//     // Get all convictions from application state
//     const convictions = useConvictions()

//     const render = convictionsCollection => {
//         /*
//             Use interpolation here to invoke the map() method on
//             the convictionsCollection to generate the option elements.
//             Look back at the example provided above.
//         */
//         contentTarget.innerHTML = `
//             <select class="dropdown" id="crimeSelect">
//                 <option value="0">Please select a crime...</option>
//                     ${convictionsCollection.map(crime => {                       
//                     return `<option> ${crime.name} </option>`
//                 }) }
                
//             </select>
// //         `
//     }

//     render(convictions)
// }

// export default ConvictionSelect