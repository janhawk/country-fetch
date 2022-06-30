let ol = document.querySelector("ol");

fetch(" https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((country) => {
            if (country.languages.fra === "French")
                ol.innerHTML += `<li>${country.name.common}</li>`;
        });
    });