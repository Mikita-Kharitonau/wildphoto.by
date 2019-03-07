import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class WildphotoSignIn extends PolymerElement {

    static get template() {
        return html`
            <style></style>
            <div>
              <p>
                Sign In!
              </p>
            </div>
        `
    }

}

window.customElements.define('wildphoto-signin', WildphotoSignIn);