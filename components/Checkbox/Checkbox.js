export class Checkbox extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const checked = this.hasAttribute("defaultChecked") ? "checked" : "";
    const colorSchema = this.getAttribute("colorSchema");
    const size = this.getAttribute("size");
    const labelText = this.innerHTML.trim() || "Checkbox";
    console.log(this.labelText);
    this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href="Checkbox.css"/>
        <label class = "checkbox">
            <input id="c1-13" type="checkbox" ${checked}/>
            <span class="checkbox-label">${labelText}</span>
        </label>

        `;

    if (colorSchema) {
      this.shadowRoot
        .querySelector(".checkbox")
        .classList.add(`colorSchema-${colorSchema}`);
    }
    if (size) {
      this.shadowRoot.querySelector(".checkbox").classList.add(`size-${size}`);
    }
  }
}
