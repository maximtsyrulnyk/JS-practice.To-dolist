export class Todo {
    static #list = []
    static #count = 0

    static #createTaskData = (text) => {
        this.#list.push({
            id: ++this.#count,
            text,
            done: false,
        })
    }

    static #block = null
    static #template = null
    static #input = null
    static #button = null

    static init = () => {
        this.#template = document.getElementById('task',).content.firstElementChild
        this.#block = document.querySelector('.task__list');
        this.#input = document.querySelector('.form__input');
        this.#button = document.querySelector('.form__button');
        this.#button.onclick = this.#handleAdd
        this.#render()
    }
    static #handleAdd = () => {
        const value = this.#input.value
            this.#createTaskData(value)
            this.#input.value = ''
           
            console.log(this.#list)
    }
    static #render = () => {
        this.#block.innerHTML = ''
        if (this.#list.length === 0) {
            this.#block.innerText = `Список задач пустий`
        } else {
            this.#list.forEach((taskData) => {
                const el = this.#createTaskElem(taskData)
                this.#block.append(el)
            })
        }
    }

    static #createTaskElem = (data) => {
        const el = this.#template.cloneNode(true)

        const [id, text, btnDo, btnCancel] = el.children

        id.innerText = `${data.id}.`

        text.innerText = data.text

        btnCancel.onclick = this.#handleCancel(data)

        return el
    }

    static #handleCancel = (data) => () => {
        const result = this.#deleteById(data.id)
        if(result) this.#render()
    }

    static #deleteById = (id) => {
        this.#list = this.#list.filter((item) => item.id !== id);
        return true
    }
}

Todo.init()

window.todo = Todo