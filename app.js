(function () {

    const colorButtonsTop = document.getElementById('color-buttons-top');
    const newColorsBtn = document.querySelector('.new-colors')
    const colorName = document.getElementById('colorName');


    //Pętla do-while działa tak, że najpierw generuje losowy kolor za pomocą funkcji randomColorText(), a następnie sprawdza, 
    //czy ten kolor już istnieje w tablicy allColors za pomocą warunku allColors.includes(newColor). 
    //Jeśli kolor istnieje, pętla będzie się powtarzać (ponieważ jest to pętla do-while, która gwarantuje wykonanie się co najmniej raz). 
    //Jeśli kolor nie istnieje, pętla opuści i nowy kolor zostanie dodany do tablicy allColors przy użyciu allColors.push(newColor).

    let allColors = [];

    function randomColorText() {
        let colorRed = Math.floor(Math.random() * 256);
        let colorGreen = Math.floor(Math.random() * 256);
        let colorBlue = Math.floor(Math.random() * 256);

        return `RGB(${colorRed},${colorGreen},${colorBlue})`;
    }

    function createColorButton(color) {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.style.backgroundColor = color;

        button.addEventListener('click', function () {
            if (colorName.textContent === color) {
                resetAndDisplayNewColors();
            }
        });

        return button;
    }

    function resetAndDisplayNewColors() {

        allColors = [];
        clearButtons(colorButtonsTop);
        for (let i = 0; i < 6; i++) {
            let newColor;
            do {
                newColor = randomColorText();
            } while (allColors.includes(newColor))
            allColors.push(newColor);
        }


        const targetColor = allColors[Math.floor(Math.random() * allColors.length)];
        colorName.textContent = targetColor;



        for (let i = 0; i < allColors.length; i++) {
            const buttonTop = createColorButton(allColors[i]);


            colorButtonsTop.appendChild(buttonTop);

        }

        clickToCheck();
    }

    newColorsBtn.addEventListener('click', resetAndDisplayNewColors);

    function clearButtons(topRow) {
        topRow.innerHTML = '';

    }

    function clickToCheck() {
        const buttonsTop = colorButtonsTop.querySelectorAll('.btn');


        buttonsTop.forEach((button) => {
            button.addEventListener('click', () => {
                if (colorName.textContent === button.style.backgroundColor) {
                    resetAndDisplayNewColors();
                }
            });
        });

    }
})();
