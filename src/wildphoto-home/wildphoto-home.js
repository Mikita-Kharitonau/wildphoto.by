import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class WildphotoHome extends PolymerElement {

    static get template() {
        return html`
            <style></style>
            <div>
              <p>
                Wildphoto home!
              </p>
              <a href="/signin">Войти</a><br>
              <a href="/signup">Зарегистрироваться</a>
            </div>
        `
    }

}

window.customElements.define('wildphoto-home', WildphotoHome);