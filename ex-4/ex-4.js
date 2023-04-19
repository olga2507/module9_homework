//Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

//При клике на кнопку происходит следующее:

//Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
//Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.


const resultNode = document.querySelector(".result");
const btnNode = document.querySelector(".j-btn-request");

btnNode.addEventListener ("click", () => {
    const width = document.querySelector(".width").value;
    const height = document.querySelector(".height").value;
    if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
        fetch(`https://picsum.photos/${width}/${height}`).then((response) => {
          resultUrl = response.url;
          let cards = "";
          const cardBlock = `
          <div class="card">
            <img
              src="${resultUrl}"
              class="card-image"
            />
          </div>
        `;
          cards = cards + cardBlock;
    
          resultNode.innerHTML = cards;
        });
      } else {
        resultNode.innerHTML = `<p>число вне диапазона от 100 до 300</p>`;
      }


})