# README для сервиса пользователей на NestJS с Prisma и PostgreSQL

## Описание
Этот проект представляет собой сервис, который управляет пользователями.
## Установка

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/sem-a/effective-test-nest-js
   cd user-service
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Настройте базу данных:**
    - Создайте новую базу данных в PostgreSQL.
    - Обновите файл `.env` с вашими данными подключения к базе:
      ```
      DATABASE_URL="postgresql://<пользователь>:<пароль>@localhost:<порт>/<имя_бд>"
      ```

4. **Инициализируйте Prisma:**
    ```bash
    npx prisma init
    ```

5. **Создайте миграцию базы данных:**
    ```bash
    npx prisma migrate dev --name init_users_table 
    ```

6. **Заполните БД тестовыми данными (опционально):**  
Для заполнения таблицы пользователей случайными данными выполните метод `seed()` из класса `SeedService`.
Он выполняется автоматически при запуске приложения. Таблица очищается и заполняется занового случайными данными.

## Запуск приложения

Чтобы запустить приложение, используйте команду:

```bash
npm run start 
```
Приложение будет доступно по адресу http://localhost:3000.

### Эндпоинты API

- `PATCH /users/reset-problems`: Сбрасывает флаг "проблемы" у всех пользователей и возвращает количество пользователей, которые имели проблемы до сброса.

## Использование 

После запуска вы можете использовать Postman или другой инструмент API-тестирования чтобы отправить PATCH-запрос на эндпоинт `/users/reset-problems`, что позволит вам протестировать функциональность вашего сервиса.

### Примечания 

- Не забудьте установить все необходимые пакеты перед запуском приложения!
- Для получения дополнительной информации об использовании NestJS и Prisma обратитесь к официальным документациям [NestJS](https://docs.nestjs.com/) и [Prisma](https://www.prisma.io/docs).
