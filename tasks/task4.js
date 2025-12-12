async function deleteUser(id) {
  try {
    // "https://jsonplaceholder.typicode.com/users - адреса куди робити запит"
    
    // Формуємо URL та виконуємо запит з методом DELETE.
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });

    // Тому ми повертаємо сам об'єкт відповіді fetch, а не просто число.
    return response;

  } catch (error) {
    console.error("Не вдалося видалити користувача:", error);
  }
}

// Виклик функції. Виводимо статус для перевірки очима.
deleteUser(1).then(response => {
    // Перевірка існування response перед зверненням до status, щоб уникнути помилок у консолі
    if (response) {
        console.log(response.status);
    }
});

module.exports = deleteUser;