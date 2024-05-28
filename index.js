const words = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum".split(' ');
const wordsCount = words.length;


function randomWord() {
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex - 1];
}

function formatWord(word) {
    return `<div class="word">
                <span class="letter">
                    ${word.split('').join('</span><span class="letter">')}
                </span>
            </div>`;
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for(let i=0; i< 250; i++){
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
}

newGame();