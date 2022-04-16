const countryInputContainer = document.querySelector('.CountryCodeInput')
const countryNameInput = countryInputContainer.querySelector('input')
const countryPhoneInput = document.getElementById('sign-in-phone-number')
 countryNameInput.value = 'Russian Federation'
countryPhoneInput.value = '+7 '


function toggleMenu() {
    const countryMenu = document.querySelector('.bubble')
    countryMenu.classList.toggle('shown')
    countryMenu.classList.toggle('open')
}

function handleCountryInputClick (event)  {
    event.stopPropagation()
    toggleMenu()
}

countryInputContainer.addEventListener('click', handleCountryInputClick )

const countryItems = document.querySelectorAll('.MenuItem')

countryItems.forEach(countryItem => {
    countryItem.addEventListener('click', event => {
        const countryName = countryItem.querySelector('.country-name').innerText
        const countryCode = countryItem.querySelector('.country-code').innerText

        countryNameInput.value = countryName

        countryPhoneInput.value = `${countryCode} `
    })
})
