import style from "./question__list.css";
import Question from "../question/question";

export default class Question__list {
    constructor({
        conteiner
    }) {
        this.conteiner = conteiner;
        this.elem = document.createElement('div');
        this.elem.classList = "list";
        this.conteiner.append(this.elem);
        this.questions__storage = [];

        this.elem.addEventListener(
            'click',
            this.expand.bind(this)
        )
    }

    expand(event) {
        let target = event.target.closest(".question-accordion");
        target.classList.toggle("active");
        let panel = target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    addQuestion(data) {
        this.questions__storage.push(data);
        data.id = this.questions__storage.length;
        new Question({conteiner:this.elem, data});
        console.dir(this.questions__storage)
    } 

}