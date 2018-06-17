import style from "./question.css";

export default class Question {
    constructor({
        conteiner,
        data
    }) {
        this.conteiner = conteiner;
        this.data = data;
        this.render();
        this.isActive = '';
    }

    render() {
        this.conteiner.innerHTML += this.template(this.data);
    }

    expand(event) {
        let target = event.target.closest(".question-accordion");
        target.classList.toggle("active");
        var panel = target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    template(data) {
        return `
    <div class="question">
        <button class="question-accordion">
            <span class="question-num">${data.id}</span>
            <span class="question-button">${data.question}</span>
        </button>
        <div class="question-panel">
            <img class="question-icon" src="${data.img}">
            <p>
                <span class="question-answer-num question-rightAnswer">1</span>
                <span class="question-answer">${data.answers[0]}</span>
            </p>
            <p>
                <span class="question-answer-num">2</span>
                <span class="question-answer">${data.answers[1]}</span>
            </p>
            <p>
                <span class="question-answer-num">3</span>
                <span class="question-answer">${data.answers[2]}</span>
            </p>
            <p>
                <span class="question-answer-num">4</span>
                <span class="question-answer">${data.answers[3]}</span>
                </p>
            <div class="question-control">
                <button class="field_button">Редактировать</button>
            </div>
        </div>
    </div>
    `
    }
}