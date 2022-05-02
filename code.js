const codeInput = document.getElementById('sign-in-code')

codeInput.addEventListener('keydown', event => {
    if(event.code === 'Backspace') return
    if (event.target.value.length > 4) {
        event.preventDefault()
    }
})
