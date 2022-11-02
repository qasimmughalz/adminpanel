export const dummyUsersData = async () => {
  let response = await fetch('https://dummyjson.com/users?limit=7');
  let data = await response.json();
  return data.users;
};
