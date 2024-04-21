export class Table extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const headers = this.getAttribute("headers")
      .split(",")
      .map((header) => header.trim());
    const variant = this.getAttribute("variant") || "";
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="Table.css"/>
            <table class = "table">
                <thead>
                    <tr>
                        ${headers.map((e) => `<th>${e}</th>`).join("")}
                    </tr>
                </thead>
                <tbody><tbody>
            </table>
        `;
    if (variant) {
      this.shadowRoot
        .querySelector(".table")
        .classList.add(`variant-${variant}`);
    }
  }
  set data(data) {
    const tableBody = this.shadowRoot.querySelector("tbody");
    const rows = data.map((rowData) => {
      const row = document.createElement("tr");
      const cells = rowData.map((cellData) => {
        const cell = document.createElement("td");

        cell.textContent = cellData;
        return cell;
      });
      row.append(...cells);
      return row;
    });

    tableBody.innerHTML = "";
    tableBody.append(...rows);
  }
}
