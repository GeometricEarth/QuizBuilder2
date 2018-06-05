import style from "./question__list.css";

export default class Question__list {
    constructor({
        conteiner
    }){
        this.conteiner = conteiner;
        this.elem = document.createElement('div');
        this.elem.classList = "list";
        this.conteiner.append(this.elem);
    }
}