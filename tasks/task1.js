// "https://jsonplaceholder.typicode.com/users - адреса куди робити запит"
const URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  try {
    // "Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
    // Формальне пояснення: Виконуємо запит до сервера.
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP помилка! Статус: ${response.status}`);
    }

    const data = await response.json();

    // "Поверніть дані користувачів у форматі масиву"
    // "Дані мають включати такі поля, як id та name."
    // Використовуємо map для трансформації даних без reduce/regex.
    const users = data.map(user => {
      return {
        id: user.id,
        name: user.name
      };
    });

    return users;

  } catch (error) {
    console.error(error);
  }
}

// Виправлено: тепер результат виводиться коректно після завершення запиту
fetchUsers().then(data => console.log(data));

module.exports = fetchUsers;