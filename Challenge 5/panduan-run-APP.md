## How to Run APP

1. install all required dependencies with command

```properties
    yarn install
```

2. Create the database with command below

```properties
    yarn sequelize db:create
```

3. Migrate all data in database with command bellow

```properties
    yarn sequelize db:migrate
```

4. Run the server.

```properties
    yarn dev or yarn watch

<!--  -->

## Database Structure

<h1>Entity Relationhip Diagram<h1>

(https://user-images.githubusercontent.com/79560466/194763416-8d8255f1-2629-4ce7-8a51-71bedb6ea851.png)

| Column    | Type                     |
| --------- | ------------------------ |
| id        | integer                  |
| name      | character(255)           |
| price     | float                    |
| size      | character(255)           |
| foto      | character(255)           |
| createdAt | timestamp with time zone |
| updatedAt | timestamp with time zone |


```

## Feature

- Create API for insert new car data
- Create API for update car data
- Create API for delete car data
- Create API for show all cars data
- Create view to show all cars
- Create form to add or edit a car data

<!--  -->
