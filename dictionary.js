const Btn = document.querySelector('#button')

const dictionary = []; //단어장
Btn.addEventListener('click', () => {
    const Word = document.querySelector('#word').textContent
    const Input = document.querySelector('#input').value
    const LastIndex = Word.length - 1
    const W = Word[LastIndex]
    const I = Input[0]
    if (dictionary.includes(Input)) {  //단어장 안에 인풋이 들어 있는가 검사.판단하는 동작.
        document.querySelector('#error').textContent = '중복입니다.'
    } else {
        if (W === I) {  
            document.querySelector('#word').textContent = Input
            document.querySelector('#error').textContent = ''
            document.querySelector('#input').value = ''
            document.querySelector('#input').focus()
            dictionary.push(Input)
        } else {
            document.querySelector('#error').textContent = '땡'
            document.querySelector('#input').value = ''
            document.querySelector('#input').focus()
        }

    }
  
})
