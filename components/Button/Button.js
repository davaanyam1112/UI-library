export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const icon = this.getAttribute("icon");
    const name = this.innerHTML.trim();
    const variant = this.getAttribute("variant");
    const size = this.getAttribute("size");
    const color = this.getAttribute("color");
    this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href="Button.css" />
        <button class="button" >
        ${(icon && `<ion-icon name ="${icon}"></ion-icon>`) || ""}
        <span class = "label"> ${name || ""}  </span>
        </button>
        `;

    if (variant) {
      this.shadowRoot
        .querySelector(".button")
        .classList.add(`variant-${variant}`);
    }
    if (size) {
      this.shadowRoot.querySelector(".button").classList.add(`size-${size}`);
    }
    if (color) {
      this.shadowRoot.querySelector(".button").classList.add(`color-${color}`);
    }
  }
}
