async function createUser(user) {
  try {
    // "https://jsonplaceholder.typicode.com/users - адреса куди робити запит"
    const url = "https://jsonplaceholder.typicode.com/users";

    // "Для створення нового користувача, передайте в запит наступні дані:"
    // "name: ваше ім’я"
    // "email: ваш email"
    
    //Формування параметрів запиту. Вказується метод 'POST' для відправки даних.
    // Заголовки (headers) встановлюють тип контенту 'application/json', що повідомляє серверу формат переданих даних.
    // Тіло запиту (body) серіалізується з об'єкта JavaScript у рядок JSON за допомогою методу JSON.stringify().
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    // Виконання асинхронного запиту до сервера з налаштованими параметрами.
    const response = await fetch(url, options);

    // Перевірка HTTP-статусу відповіді (200-299) для гарантії успішного виконання операції.
    if (!response.ok) {
      throw new Error(`HTTP помилка! Статус: ${response.status}`);
    }

    // Отримання та декодування відповіді сервера з формату JSON.
    const data = await response.json();

    // "Поверніть відповідь від сервера після створення користувача."
    // Повернення об'єкта, що надійшов від сервера (зазвичай містить id нового запису).
    return data;

  } catch (error) {
    // Обробка виняткових ситуацій (помилки мережі або серверні помилки).
    console.error("Помилка створення користувача:", error);
  }
}

// Виклик функції з тестовими даними. 
// Використано метод .then() для коректного виводу результату Promise в консоль.
createUser({name: "Sam", email: "fjsnfkjns2342@gmail.com"})
  .then(data => console.log(data));

module.exports = createUser;