import { html } from './util.js'
import { App } from './App.js'


class Root extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.template())
    }

    template() {
        return html(`<div>
            sdvsdv
            <app-components></app-components>
        </div>`)
    }
}

customElements.define('app-components', App);

customElements.define('app-root', Root);
