import { html, LitElement, customElement } from 'lit-element';

@customElement('groovy-flex-grid')
class main extends LitElement {
  render() {
    return html`
      <div class="container">
    

        <slot> </slot>
      </div>

      <style>
        .container {
          width: 100%;
          display: flex;
          flex-direction: row;
          width: 100%;
          border: 1px solid yellow;
          min-height: 100px;
        }
      </style>
    `;
  }
}
