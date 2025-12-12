async function updateUser(id, updatedData) {
  try {
    // "https://jsonplaceholder.typicode.com/users - адреса куди робити запит"
    
    // Динамічне формування URL-адреси за допомогою шаблонних рядків (template literals).
    // Базова адреса конкатенується з ідентифікатором користувача (id) для точного націлення на ресурс.
    // Це дозволяє уникнути використання складних методів обробки рядків або регулярних виразів.
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    // "Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
    
    // Підготовка конфігурації запиту. 
    // Метод 'PATCH' вказує серверу на необхідність часткового оновлення ресурсу (змінюються лише передані поля).
    // Об'єкт updatedData перетворюється на JSON-рядок для коректної передачі в тілі запиту.
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    };

    // Виконання асинхронного мережевого запиту.
    const response = await fetch(url, options);

    // Валідація відповіді сервера.
    if (!response.ok) {
      throw new Error(`HTTP помилка! Статус: ${response.status}`);
    }

    // Десеріалізація отриманої відповіді.
    const data = await response.json();
    // Повернення обробленого об'єкта даних, який відображає стан ресурсу на сервері після оновлення.
    return data;

  } catch (error) {
    // Логування помилок, що виникли під час виконання запиту або обробки даних.
    console.error("Не вдалося оновити дані користувача:", error);
  }
}

// Виклик функції з тестовими даними.
// Додано обробник .then() для коректного відображення результату асинхронної функції в консолі.
updateUser(1, { name: 'New Name' })
  .then(data => console.log(data));

module.exports = updateUser;