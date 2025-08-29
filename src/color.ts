let selectedClass = "CLK"
let lastColorId = 0;

let classes: string[] = [];

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const circuit = params.get('circuit');
let selectedClassInput = <HTMLInputElement>document.querySelector('#selectedClassInput');
let saveBtn = <HTMLInputElement>document.querySelector('#save-btn');
let modeCheckbox = <HTMLInputElement>document.querySelector('#mode');
let outputCheckbox = <HTMLInputElement>document.querySelector('#output-mode');

function changeColor(event: Event) {
    console.log('path clicked');

    if (modeCheckbox.checked) {
        let type: string | null = prompt('what is the type of component');
        if (type === null) throw new Error('type cannot be null');

        let el: HTMLElement | null = <HTMLElement>event.target;
        while (el && el.tagName !== 'g') {
            el = el.parentElement;
        }

        if (!el) throw new Error('Parent element not found');

        for (let c of el.classList) {
            el.classList.remove(c);
        }

        el.classList.add(type);
        el.setAttribute('pointer-events', 'visible');

        return;
    }

    const element = <SVGAElement>event.target;
    console.log(selectedClass);
    console.log(element);
    element.classList.toggle(selectedClass);

    for (let c of element.classList) {
        if (c !== selectedClass) {
            element.classList.remove(c);
        }
    }
}

function setClass(event: Event) {
    console.log('text clicked');
    let el: HTMLElement | null = <HTMLElement>event.target;

    const element = <SVGTextElement>event.target;
    selectedClass = <string>element.textContent;
    selectedClassInput.value = selectedClass;

    while (el && el.tagName !== 'g') {
        el = el.parentElement;
    }

    if (!el) throw new Error('Parent element not found');

    if (modeCheckbox.checked) {
        for (let c of el.classList) {
            el.classList.remove(c);
        }

        el.classList.add(selectedClass);
        el.setAttribute('pointer-events', 'visible');
    } else {
        let outputMode = outputCheckbox.checked;
        let type = !outputMode ? 'Input' : 'Output';
        if (!el.classList.contains(type)) {
            el.classList.add(type);
            el.id = selectedClass;
            if (type === 'Input') {
                el.setAttribute('pointer-events', 'visible');
            }
        }
    }
}

function saveSvg() {
    // Get the SVG element
    const svgElement = document.getElementsByTagName('svg')[0];
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = circuit + '.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

fetch('./' + circuit + '.svg')
    .then(response => response.text())
    .then((svgFromDisk: any) => {
        let container: any = document.getElementById('svg-container');
        container.innerHTML = svgFromDisk;

        let svg: any = document.getElementsByTagName('svg')[0];
        const paths = svg.querySelectorAll("path");
        paths.forEach(function (path: any) {
            path.addEventListener("click", changeColor);
        });

        const circles = svg.querySelectorAll("circle");
        circles.forEach(function (circle: any) {
            circle.addEventListener("click", changeColor);
        });

        const texts = svg.querySelectorAll("text");
        texts.forEach((text: any) => {
            text.addEventListener("click", setClass);
        });
    })
    .catch(error => console.error('Error loading SVG:', error));

selectedClassInput.value = selectedClass;
selectedClassInput?.addEventListener('input', (event) => {
    let input = <HTMLInputElement>event.target;
    selectedClass = <string>input.value;
});

saveBtn.addEventListener('click', (event) => {
    saveSvg();
})