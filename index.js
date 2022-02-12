const grid__canvas = document.querySelector(".grid");
const options = document.querySelector(".options");
let clearBtn = document.createElement("button");
let eraser = document.createElement("button");
let colorPicker = document.createElement("input");
let gridSize = document.createElement("input");
let rangeValue = document.createElement("span");

function makeRows(grid) {
  grid__canvas.style.setProperty("--grid-rows", grid);
  grid__canvas.style.setProperty("--grid-cols", grid);
  colorPicker.setAttribute("type", "color");
  options.appendChild(colorPicker);
  for (let i = 0; i < grid * grid; i++) {
    let cell = document.createElement("div");
    grid__canvas.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = colorPicker.value;
    });
  }
}
makeRows(16);

function selectGridSize() {
  gridSize.setAttribute("type", "range");
  gridSize.setAttribute("min", "1");
  gridSize.setAttribute("max", "100");
  gridSize.style = "padding: 5px 10px; text-transform: uppercase;";
  options.appendChild(gridSize);

  gridSize.addEventListener("change", () => {
    rangeValue.innerText = `Grid Size: ${gridSize.value}`;
    options.insertBefore(rangeValue, gridSize.nextSibling);
    grid__canvas.innerHTML = "";
    makeRows(gridSize.value);
  });
}
selectGridSize();

function clear() {
  clearBtn.innerText = "clear";
  clearBtn.style = "padding: 5px 10px; text-transform: uppercase;";
  let cells = document.querySelectorAll(".grid-item");
  options.appendChild(clearBtn);
  clearBtn.addEventListener("click", () => {
    cells.forEach((cell) => {
      cell.removeAttribute("style");
    });
  });
}
clear();
