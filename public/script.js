const api_url = 'https://opentdb.com/api.php?amount=1&type=multiple';
const questionBlock = document.querySelector('#questionBlock');
const questionDiv = document.querySelector('#question');
const alternativesDiv = document.querySelector('#alternatives');

getData();
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const question = data.results[0].question;
    const correct_answer = data.results[0].correct_answer;
    const incorrect_answer = data.results[0].incorrect_answers
    let alternatives = [];

        alternatives.push(
        `<h2 id="alternative correct">${correct_answer}</h2>`);
    for (let i = 0; i < incorrect_answer.length; i++) {
        const incorrect_answer = data.results[0].incorrect_answers[i];
        alternatives.push(
        `<h2 id="alternative">${incorrect_answer}</h2>`)
        
    }
    const shuffledAlternatives = alternatives.sort((a, b) => 0.5 - Math.random());
    
    for (let i = 0; i < shuffledAlternatives.length; i++) {
        const alternative = shuffledAlternatives[i];
        alternativesDiv.innerHTML += alternative;
    }

    questionDiv.innerHTML = question;
    console.log(shuffledAlternatives, correct_answer);
}