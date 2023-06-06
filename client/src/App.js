import { html } from './util.js'
import { configureStore } from '@reduxjs/toolkit'


class App extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.render())

        this.store = configureStore({
            reducer: this.counter
        })
        this.store.subscribe(() => console.log(this.store.getState()))

    }

    counter(state = 0, action) {
        switch (action.type) {
          case 'INCREMENT':
            return state + 1
          case 'DECREMENT':
            return state - 1
          default:
            return state
        }
    }
      

    handleClick() {
        this.store.dispatch({ type: 'INCREMENT' })
    }

    render() {
        return html(`<h1>테스트 입니다.</h1> <button ref="button"> 클릭 </button>`)
    }

    connectedCallback() {
        this.shadowRoot.querySelector("button[ref='button']").addEventListener("click", this.handleClick.bind(this))
    }
}

export { App }