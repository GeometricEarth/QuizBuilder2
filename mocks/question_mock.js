import style from "../src/components/question/question";

function template (){
    return `
    <div class="question" id="0">
        <button class="question-accordion active">
            <span class="question-num">1</span>
            <span class="question-button">Текст вопроса</span>
        </button>
        <div class="question-panel" style="max-height: 490px;">
            <img class="question-icon" src="">
            <p>
                <span class="question-answer-num question-rightAnswer">1</span>
                <span class="question-answer">Ответ</span>
            </p>
            <p>
                <span class="question-answer-num">2</span>
                <span class="question-answer">Ответ</span>
            </p>
            <p>
                <span class="question-answer-num">3</span>
                <span class="question-answer">Ответ</span>
            </p>
            <p>
                <span class="question-answer-num">4</span>
                <span class="question-answer">Ответ</span>
                </p>
            <div class="question-control">
                <button class="field_button">Редактировать</button>
            </div>
        </div>
    </div>
    `
};

export default template;