import styles from "./card.css"
export enum Attribute {
    "category" = "category",
    

}

class Card extends HTMLElement {
    category?: string;
   

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            category: null,
            
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += `
                <section class = "card">
                <button>"${this.category}"</button>
              
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;