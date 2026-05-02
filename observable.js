import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/805e2fcd10a70c02@36.js?v=4";

const container = document.createElement("div");
container.id = "observablehq-20771154";
document.body.appendChild(container);

const credit = document.createElement("p");
credit.innerHTML = 'Credit: <a href="https://observablehq.com/d/805e2fcd10a70c02@36">Visualization Final Project by Visualizing Info</a>';
document.body.appendChild(credit);

const inspectorStyle = document.createElement("link");
inspectorStyle.rel = "stylesheet";
inspectorStyle.href = "https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css";
document.head.appendChild(inspectorStyle);

new Runtime().module(define, Inspector.into("#observablehq-20771154"));