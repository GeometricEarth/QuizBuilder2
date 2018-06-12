import style from "./question__list.css";
import Question from "../../../mocks/question_mock";

export default class Question__list {
    constructor({
        conteiner
    }) {
        this.conteiner = conteiner;
        this.elem = document.createElement('div');
        this.elem.classList = "list";
        this.conteiner.append(this.elem);
    }

    addQuestion(data) {
        this.elem.innerHTML += Question()
    }

}