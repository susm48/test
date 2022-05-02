const countryInputContainer = document.querySelector('.CountryCodeInput')
const countryNameInput = countryInputContainer.querySelector('input')
const countryPhoneInput = document.getElementById('sign-in-phone-number')
const nextButton = document.getElementById('next-button')
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

countryPhoneInput.addEventListener('keydown', event => {
    const length = event.target.value.length
    const value = event.target.value
    if (length > 8) {
        nextButton.classList.remove('hidden-button')
    } else {
        nextButton.classList.add('hidden-button')
    }
    if (value.startsWith('+7') && event.code !== 'Backspace' && (length === 2 || length === 6 || length === 10)  ) {
        console.log('lol')
        countryPhoneInput.value = event.target.value + ' '
    }
})

