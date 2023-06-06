import { html } from './util.js'


class App extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.template())
    }

    template() {
        return html(`<h1>테스트 입니다.</h1>`)
    }
}

export { App }