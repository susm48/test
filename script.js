const countryInput = document.querySelector('.CountryCodeInput')
console.log(countryInput)

countryInput.addEventListener('click', event => {
    event.stopPropagation()
    const countryMenu = document.querySelector('.bubble')
    countryMenu.classList.toggle('shown')
    countryMenu.classList.toggle('open')
})
