/* 
            Vacation Rental Template
            - template
            - pass data
            - add any interactivity
            - return element

            1. setting up and testing the component...
               html/css ---->view ui element.
*/

function vacationRental ({key, city, urlPath, price}) {
    const template =`
    <aside class="vacation-rental">

    <figure>
    <img src="${urlPath}" width="160" alt="holiday rental property located in ${city}">
        <figcaption> <h2>${city}</h2></figcaption>
    </figure>

    <footer>
        <button id="edit"  data-key="${key}" >edit</button>
        <button id="delete" data-key="${key}" >delete</button>
    </footer>

  </aside>
    `
    const element = document.createRange().createContextualFragment(template).children[0]
    addRentalControls(element)
    return element
}

function addRentalControls(rental){
    rental.querySelector('#edit').addEventListener('click', onEditRental)
    rental.querySelector('#delete').addEventListener('click', onRemoveRental)

}
function onEditRental(e){
    const key = e.target.dataset.key
    sessionStorage.setItem('key', key)
    window.location.assign('update.html')
}
function onRemoveRental(e){
    const key = e.target.dataset.key
    sessionStorage.setItem('key', key)
    window.location.assign('delete.html')
}
export {vacationRental}