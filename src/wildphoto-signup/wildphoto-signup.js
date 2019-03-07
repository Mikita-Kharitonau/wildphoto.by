import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class WildphotoSignUp extends PolymerElement {

    static get template() {
        return html`
            <style></style>
            <div>
              <p>
                Sign Up!
              </p>
            </div>
        `
    }

}

window.customElements.define('wildphoto-signup', WildphotoSignUp);