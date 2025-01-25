
const form = document.getElementById("first");
const parent = document.querySelector(".parent");
const colorInput = document.querySelector(".color"); 

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let namee = form.querySelector("input").value;

    if (namee.trim() !== "") {
        const firstt = document.createElement("p");

        firstt.textContent = `${namee}`;

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        const minusButton = document.createElement("button");
        minusButton.textContent = "-";

        firstt.appendChild(plusButton);
        firstt.appendChild(minusButton);

        plusButton.addEventListener("click", () => {
            namee++;
            firstt.textContent = `${namee}`;
            firstt.appendChild(plusButton); 
            firstt.appendChild(minusButton);
        });

        minusButton.addEventListener("click", () => {
            namee--;
            firstt.textContent = `${namee}`;
            firstt.appendChild(plusButton); 
            firstt.appendChild(minusButton);
        });

        parent.appendChild(firstt);

        form.querySelector("input").value = "";

        plusButton.style.width = "50px";
        plusButton.style.height = "50px";
        minusButton.style.width = "50px";
        minusButton.style.height = "50px";
        firstt.style.marginLeft = "180px";
        firstt.style.fontSize = "32px";
        firstt.style.gap = "80px";

        colorInput.addEventListener("input", () => {
            firstt.style.color = colorInput.value;
        });
    }   
});