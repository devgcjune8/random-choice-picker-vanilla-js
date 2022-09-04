const choicesDiv = document.querySelector('#options')
const textArea = document.querySelector('textarea')

textArea.focus()

textArea.addEventListener('keyup', (key) => {
    chooseOption(key.target.value)

    if (key.key === "Enter") {
        setTimeout(() => {
            key.target.value = ''
        }, 10)
        rndmOptn()
    }
})

function chooseOption(key) {
    const choices = key.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim())
    
    choicesDiv.innerHTML = '';
    
    choices.forEach(choice => {
        const choiceEl = document.createElement('div')
        choiceEl.classList.add('choice')
        choiceEl.innerText = choice;
        choicesDiv.appendChild(choiceEl)
    });

}

function rndmOptn() {
    const multiplier = 30;

    const int = setInterval(() => {
        const rndmChc = pckRndmChc()

        chosenOption(rndmChc)

        setTimeout(() => {
            chosenOptionRevert(rndmChc)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(int)
        
        setTimeout(() => {
            const arbitraryPick = pckRndmChc()

            chosenOption(arbitraryPick)
        }, 100)
    }, multiplier * 100)
};

function pckRndmChc() {
    const options = document.querySelectorAll('.choice')
    return options[Math.floor(Math.random() * options.length)]
    
}

function chosenOption(choice) {
    choice.classList.add('chosen')
}

function chosenOptionRevert(choice) {
    choice.classList.remove('chosen')
}