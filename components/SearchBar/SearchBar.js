export class SearchBar extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        const placeholder = this.getAttribute("placeholder");
        const mode = this.getAttribute("mode");
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "SearchBar.css" />
        <div class = "host">
            <ion-icon name="search-outline"></ion-icon>
            <input class="input" type="search" placeholder="${placeholder}"/>
        </div>
      
        ` ;

        const input = this.shadowRoot.querySelector(".input");

        input.addEventListener("input" , (ev) =>{
            this.dispatchEvent(new CustomEvent("search-input",{
                detail:ev ,
            }))
        })
        if(mode){
            this.shadowRoot.querySelector(".host").classList.add(`mode-${mode}`);
        }
    }
}