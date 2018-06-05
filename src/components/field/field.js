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
        let form = event.target;
        let radio_btn = Array.from(form.true);
        let inputs = form.inp;
        let data = {
            question:form.question.value,
            true_answer:'',
            answers: [],
        };
        radio_btn.forEach(
            (element, id , arr)=>{
                if(element.checked){
                    data.true_answer = element.value;
                }
            }
        )

        inputs.forEach(element => {
            data.answers.push(element.value);
        });
        
        console.dir(data);
    }

    template(){
        return `
                    <div class="field_header">
                        <h2>Добавить вопрос</h2>
                    </div>
                    <img class="field_load_img" src="./src/assets/no-image-icon.png">
                    
                    <textarea id="questionTextArea" name="question" placeholder="Текст вопроса"
                    rows="4"></textarea>
                    
                    <div>
                        <div class="roundedOne">
                            <input type="radio" id="roundedOne1" name="true" value="1"/>
                            <label for="roundedOne1"></label>
                        </div>
                        <input name="inp" class="field_answer" id="inp1" placeholder="Вариант ответа 1" type="text">
                    </div>    
                    <div>  
                        <div class="roundedOne">
                            <input type="radio" id="roundedOne2" name="true" value="2"/>
                            <label for="roundedOne2"></label>
                        </div>
                        <input name="inp" class="field_answer" id="inp2" placeholder="Вариант ответа 2" type="text">
                    </div>
                    <div>
                        <div class="roundedOne">
                            <input type="radio" id="roundedOne3" name="true" value="3"/>
                            <label for="roundedOne3"></label>
                        </div>
                        <input name="inp" class="field_answer" id="inp3" placeholder="Вариант ответа 3" type="text">
                    </div>
                    <div>
                        <div class="roundedOne">
                            <input type="radio" id="roundedOne4" name="true" value="4"/>
                            <label for="roundedOne4"></label>
                        </div>
                        <input name="inp" class="field_answer" id="inp4" placeholder="Вариант ответа 4" type="text">
                    </div>
                    <div class="field_control">
                    <input type="submit" class="field_submit field_button" value="Отправить">
                    <button type="reset" class="field_button">Очистить</button>
                    </div>
        `
    }
}