function generateShape() {
  const shape = document.getElementById("shape").value;
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;

  const output = document.getElementById("output");

  // Clear previous shape
  output.innerHTML = "";

  const element = document.createElement("div");
  element.classList.add("shape");

  if (shape === "circle") {
    element.style.width = size + "px";
    element.style.height = size + "px";
    element.style.backgroundColor = color;
    element.style.borderRadius = "50%";
  } else if (shape === "square") {
    element.style.width = size + "px";
    element.style.height = size + "px";
    element.style.backgroundColor = color;
  } else if (shape === "triangle") {
    element.style.width = "0";
    element.style.height = "0";
    element.style.borderLeft = size / 2 + "px solid transparent";
    element.style.borderRight = size / 2 + "px solid transparent";
    element.style.borderBottom = size + "px solid " + color;
  }

  output.appendChild(element);
}
