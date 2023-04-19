//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.


const parser = new DOMParser();

const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const list = [];

let student = xmlDOM.querySelectorAll("student");

student.forEach(item =>{
  const student = {};
  student.name = (item.querySelector ('name').textContent);
  student.age = (item.querySelector ('age').textContent);
  student.prof = (item.querySelector ('prof').textContent);
  student.lang = (item.querySelector ('name').getAttribute('lang'));
  list.push(student)
});

console.log(list)

