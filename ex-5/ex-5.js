//Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

//Заголовок первого input — «номер страницы».
//Заголовок второго input — «лимит».
//Заголовок кнопки — «запрос».
//При клике на кнопку происходит следующее:

//Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
//Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
//Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
//Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.

//После получения данных вывести список картинок на экран.

//Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).

const resultNode = document.querySelector(".result");
const btnNode = document.querySelector(".j-btn-request");

function loadedImages(data) {
    for (item in data) {
        let image = '';
        image = image + `
        <div class="card">
          <img src="${data[item].download_url}"
            class="card-image"
          />
        </div>
      `;
    }
    result.innerHTML = image;
    localStorage.setItem("imageData", JSON.stringify(data))
}

btnNode.addEventListener ("click", () => {
    const page = document.querySelector (".page").value;
    const limit = document.querySelector (".limit").value;
    if (page >= 1 && page <= 10 && limit >= 1 && limit <= 10) {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
            const result = response.json();
            return result;
          })
        .then((data) => {
            loadedImages (data)
          })
        .catch(() => { console.log('error') });
    } else if (page <= 1 && page >= 10 && limit >= 1 && limit <= 10) {
        resultNode.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
    }  else if (page >= 1 && page <= 10 && limit <= 1 && limit >= 10) {
        resultNode.innerHTML = `</p>Лимит вне диапазона от 1 до 10</p>`;
    } else {
        resultNode.innerHTML = `</p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
    }
})

window.addEventListener ("load", () => {
    const storedData = localStorage.getItem("imageData");
    if (storedData) {
        loadedImages(JSON.parse(storedData));
    }
})


