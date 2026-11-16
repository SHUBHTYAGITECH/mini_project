

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeButton.textContent = "Light Mode";

        }
        else {

            themeButton.textContent = "Dark Mode";

        }

    });

}




function calculateTime() {

    let capacity = Number(
        document.getElementById("capacity").value
    );

    let power = Number(
        document.getElementById("power").value
    );

    let result = document.getElementById("result");


    if (capacity <= 0 || power <= 0 ||
        !Number.isFinite(capacity) ||
        !Number.isFinite(power)) {

        result.textContent = "Please enter valid values.";

    }

    else {

        let time = capacity / (power * 0.9);

        result.textContent =
            "Estimated Charging Time: " +
            time.toFixed(2) + " hours";

    }

}
