const Btn = document.querySelector('#button')

Btn.addEventListener('click', () => {
    const Word = document.querySelector('#word').textContent
    const Input = document.querySelector('#input').value
    const LastIndex = Word.length - 1
    const W = Word[LastIndex]
    const I = Input[0]
    if (W === I) {  
        document.querySelector('#word').textContent = Input
        document.querySelector('#error').textContent = ''
        document.querySelector('#input').value = ''
        document.querySelector('#input').focus()
    } else {
        document.querySelector('#error').textContent = '땡'
        document.querySelector('#input').value = ''
        document.querySelector('#input').focus()
    }

})
