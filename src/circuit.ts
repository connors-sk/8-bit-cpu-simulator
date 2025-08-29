import { Element } from "./types";
import { circuitsLookup } from "./circuits";
import { indexBy } from "./helpers";
import { translateAll } from "./translate";
import { evaluateAll } from "./evaluate";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const circuit = params.get('circuit');

if (!circuit) throw new Error('Circuit cannot be empty');

console.log(circuitsLookup);

let components: Element[] = circuitsLookup[circuit].parts;
components = translateAll(components, circuitsLookup);
const componentLookup = indexBy(components, 'id');

const onclick = (event: Event) => {
    let el: HTMLElement | null = <HTMLElement>event.target;
    while (el !== null) {
        if (el.id) {
            break;
        }
        el = el.parentElement;
    }

    if (!el) throw new Error('Element cannot be null');

    el.classList.toggle('active');
    el.classList.toggle('inactive');

    let component = componentLookup[el.id];

    if (component.type === 'Input') {
        component.outputs.OUT = el.classList.contains('active');
    }

    evaluateAll(components, componentLookup);
    paintOutputs(components);
};

const paintOutputs = (components: Element[]) => {
    for (let component of components) {

        if ((component.type === 'Input' || component.type === 'NAND' || component.type == "Bus") && component.id.indexOf('_') === -1 || component.id.split('_').length === 2 && component.type === 'Output') {
            console.log(component);


            let elements = document.getElementsByClassName(component.id);


            for (let element of elements) {
                element.classList.remove('active');
                element.classList.remove('inactive');
                element.classList.remove('high-impedance');

                if (component.outputs.OUT === true) {
                    element.classList.add('active');
                } else if (component.outputs.OUT === 'X') {
                    element.classList.add('high-impedance');
                } else {
                    element.classList.add('inactive');
                }
            }
        }
    }
};

fetch('./' + circuit + '.svg')


    .then(response => response.text())
    .then((svgFromDisk: any) => {
        let container: any = document.getElementsByClassName('svg-container')[0];
        container.innerHTML = svgFromDisk;

        let svg: SVGElement = document.getElementsByTagName('svg')[0];

        let inputs = svg.querySelectorAll('.Input');
        inputs.forEach(input => {
            input.addEventListener('click', onclick);
            let component = componentLookup[input.id];

            if (!component) {
                throw Error("unknown component: " + input.id);
            }

            if (component.type === 'Input') {
                let out = component.outputs.OUT;
                if (out) {
                    input.classList.toggle('active');
                } else {
                    input.classList.toggle('inactive');
                }
            }
        });

        evaluateAll(components, componentLookup);
        paintOutputs(components);

        for (let key in circuitsLookup) {
            let elements = svg.querySelectorAll('.' + key);
            if (elements.length > 0) {
                elements.forEach(el => {
                    el.addEventListener('click', (event: Event) => {
                        let c = el.classList[0];
                        window.open('/circuit.html?circuit=' + c, '_blank');
                    })
                })
            }
        }

        document.querySelectorAll('g').forEach((el: any) => {
            const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
            title.textContent = el.getAttribute("class");
            el.appendChild(title);
        });
    })
    .catch(error => console.error('Error loading SVG:', error));