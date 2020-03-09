export const criminalHtml = (criminalObject) => {
    return `
      <section class="criminal__profile">
        <h3>${criminalObject.name}</h3>
        <ul class="criminal__list">
          <li>Age: ${criminalObject.age}</li>
          <li>Crime: ${criminalObject.conviction}</li>
          <li>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
          <li>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</li>
        </ul>
      </section>
    `
}