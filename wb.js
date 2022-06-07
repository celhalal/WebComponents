// Implementation for the my-product element
// Web Components Part 1 -  Custom Elements, Templates, and Shadow DOM

// const template = document.createElement('template');
// template.innerHTML = `<style>h2 { color:red; }</style><h2></h2>`;
// class MyProduct extends HTMLElement{
//     constructor(){
//         super();
//         this.attachShadow({mode: 'open'});
//         this.shadowRoot.appendChild(template.content.cloneNode(true));
//         // innerText returns all text contained by an element and all its child elements.
//         // innerHtml returns all text, including html tags, that is contained by an element.
//         this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
//     }
// }
// window.customElements.define("my-product", MyProduct);


// Web Components Part 2 - Attributes, Properties, Events, and Custom Methods
// let changeProduct = () => {
//     document.querySelector('my-product').name = 'Doobilaky';
//     document.querySelector('my-product').show();
// }

// let changeProductBack = () => {
//     document.querySelector('my-product').name = 'Headphones';
//     document.querySelector('my-product').hide();
// }

// const template = document.createElement('template');
// template.innerHTML = `<style>h2 { color:red; }</style>
//                         <h2></h2>
//                         <button style="display:none;"> Buy it!</button>`;

// class MyProduct extends HTMLElement{
//     static get observedAttributes(){
//         return['name'];
//     }

//     constructor(){
//         super();
//         this.attachShadow({mode: 'open'});
//         this.shadowRoot.appendChild(template.content.cloneNode(true));
//         this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
//     }

//     hide = () => {
//         this.shadowRoot.querySelector('button').style.display = 'none';
//     }

//     show = () => {
//         this.shadowRoot.querySelector('button').style.display = 'block';
//     }

//     get name (){
//         return this.shadowRoot.querySelector('h2').innerText;
//     }

//     set name (val){
//         this.shadowRoot.querySelector('h2').innerText = val;
//     }

//     attributeChangedCallback(name, oldValue, newValue){
//         if (name === 'name'){
//             this.shadowRoot.querySelector('h2').innerText = newValue;
//         }
//     }

//     // connected is called when a custom element is placed on the page
//     connectedCallback(){
//         this.shadowRoot.querySelector('button').addEventListener('click', ()=> this.dispatchEvent(new Event('buy')));
//     }

//     disconnectedCallback(){   
//         this.shadowRoot.querySelector('button').removeEventListener('click');
//     }
// }
// window.customElements.define("my-product", MyProduct);


// Web Components Part 3 - Tranclusion (when an element includes other elements as children) & Slots
//                          taking elements from within our cutsom element in the page side and placing them
//                          somewhere inside of it what we can control.
// Slots only work with Shadow DOM

let changeProduct = () => {
    document.querySelector('my-product').name = 'Doobilaky';
    document.querySelector('my-product').show();
}

let changeProductBack = () => {
    document.querySelector('my-product').name = 'Headphones';
    document.querySelector('my-product').hide();
}

const template = document.createElement('template');
template.innerHTML = `<style>h2 { color:red; }</style>
                        <h2></h2>
                        <div>
                        <slot/>
                        </div>
                        <div>
                            Price: <slot name='price'/>
                        </div>
                        <button style="display:none;"> Buy it!</button>`;

class MyProduct extends HTMLElement{
    static get observedAttributes(){
        return['name'];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
    }

    hide = () => {
        this.shadowRoot.querySelector('button').style.display = 'none';
    }

    show = () => {
        this.shadowRoot.querySelector('button').style.display = 'block';
    }

    get name (){
        return this.shadowRoot.querySelector('h2').innerText;
    }

    set name (val){
        this.shadowRoot.querySelector('h2').innerText = val;
    }

    attributeChangedCallback(name, oldValue, newValue){
        if (name === 'name'){
            this.shadowRoot.querySelector('h2').innerText = newValue;
        }
    }

    // connected is called when a custom element is placed on the page
    connectedCallback(){
        this.shadowRoot.querySelector('button').addEventListener('click', ()=> this.dispatchEvent(new Event('buy')));
    }

    disconnectedCallback(){   
        this.shadowRoot.querySelector('button').removeEventListener('click');
    }
}

window.customElements.define("my-product", MyProduct);