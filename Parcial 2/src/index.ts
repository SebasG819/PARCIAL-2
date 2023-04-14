import "./components/index";
import traer_api from "./services/data"
import Card, { Attribute } from "./components/btn/button"

class AppContainer extends HTMLElement {
    JokeList: Card[] = [];
    

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const dataChuck = await traer_api();
        dataChuck.forEach((data: any) => {
            console.log(data);
        });

        dataChuck.forEach((data: any) => {
            const CardChuck = this.ownerDocument.createElement("my-card") as Card;
            CardChuck.setAttribute(Attribute.category, data.category);
                this.JokeList.push(CardChuck);
        });
        this.render(this.JokeList);
    }

    render(JokeList:any) {
        const Cardschuck = this.ownerDocument.createElement("section")
        ChuckCards.className = "Section"
        this.JokeList.forEach((CardChuck) => {
            Cardschuck.appendChild(CardChuck)
        });
        this.shadowRoot?.appendChild(Cardschuck);
    }
}

customElements.define("app-container", AppContainer);