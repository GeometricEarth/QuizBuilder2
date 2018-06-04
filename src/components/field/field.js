import styles from "./field.css";

export default class Field {
    constructor({
        conteiner
    }){
        this.conteiner = conteiner;
        this.elem = document.createElement('form');
        this.elem.classList = "field";
        this.conteiner.append(this.elem);
        this.elem.innerHTML = this.template();

        this.elem.addEventListener(
            'submit',
            this.save_Question.bind(this)
        )
    }

    save_Question(event){
        event.preventDefault();
    }

    template(){
        return `
                    <h2>Добавить вопрос</h2>
                    <img id="load_icon" onclick="OpenPic()" src="..\images\no-image-icon.png">
                    
                       <textarea id="questionTextArea" name="limitedtextarea" placeholder="Текст вопроса" onKeyDown="limitText(this,120);" onKeyUp="limitText(this,120);"
                    rows="4"></textarea>
                    <div class="roundedOne">
      <input type="checkbox" value="None" id="roundedOne" name="check" checked />
      <label for="roundedOne"></label>
    </div>
                    <div>
                        <div class="roundedOne"><input name="right" class="roundedOne" type="radio"></div>
                        <input name="inp1" class="field_answer" id="inp1" placeholder="Вариант ответа 1" type="text">
                    </div>    
                    <div>  
                        <input name="right" type="radio">
                        <input name="inp2" class="field_answer" id="inp2" placeholder="Вариант ответа 2" type="text">
                    </div>
                    <div>
                        <input name="right" type="radio">
                        <input name="inp3" class="field_answer" id="inp3" placeholder="Вариант ответа 3" type="text">
                    </div>
                    <div>
                        <input name="right" type="radio">
                        <input name="inp4" class="field_answer" id="inp4" placeholder="Вариант ответа 4" type="text">
                    </div>
                    <div class="field_control">
                    <input type="submit" class="field_submit" value="Отправить">
                    <button>Очистить</button>
                    </div>
        `
    }
}