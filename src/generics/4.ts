console.log("g4.ts");
// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }

// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial <User>) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
