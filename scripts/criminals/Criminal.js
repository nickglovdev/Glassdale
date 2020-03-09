export const criminalHtml = (criminalObject) => {
    return `
      <h2>${criminalObject.name}</h2>
      <ul>
        <li>Age: ${criminalObject.age}</li>
        <li>Crime: ${criminalObject.conviction}</li>
        <li>Term Start: ${criminalObject.incarceration.start}</li>
        <li>Term End: ${criminalObject.incarceration.end}</li>
      </ul>
    `
}