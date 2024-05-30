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
        this.#template = document.getElementById('task').content.firstElementChild

        this.#block = document.querySelector('.task__list');

        this.#input = document.querySelector('.form__input');

        this.#button = document.querySelectorAll('.form__button')
    }

    static #handleAdd = () => {
        const value = this.#input.value
            this.#createTaskData(value)
            this.#input.value = ''
            
            console.log(this.#list)
    }
    static #render = () => {
        this.#block.innerHTML = ''

        if(this.#list.length === 0) {
            this.#block.innerHTML = `Список задач пустий`
        } else {
            this.#list.forEach((taskData) => {
                const el = this.#createTaskElem(taskData)
                this.#block.append(el) 
            })
        }
    }

    static #createTaskElem = (data) => {
        const el = this.#template.cloneNode(true)

        return el
    }
}

Todo.init()

window.todo = Todo