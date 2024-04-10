const greeting = () => (
    console.log('Hello World!')
)
greeting()

const guessFieldInput = document.getElementById('guessField');
const guessResultText = document.getElementById('guessResult');

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function checkGuess() {
    const getValue = Number(guessFieldInput.value);
    console.log(getRandomNumber())
    console.log(getValue);
    if(getValue === getRandomNumber()) {
        console.log('You have won!');
        guessResultText.textContent = 'You have won!';
    } else {
        console.log('Another number.');
        guessResultText.textContent = 'Another number.';
    }
    guessFieldInput.value = ' ';
}
