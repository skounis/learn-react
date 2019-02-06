// Mock data...
const users = [
    { first: 'First 1', last: 'Last 1', age: 1 },
    { first: 'First 2', last: 'Last 2', age: 2 }
  ];
  
  // Returns a promise that resolves the users array.
  export function fetchUsers(desc) {
    return new Promise((resolve, reject) => {
      if(desc) {
        users.sort((a,b) => {
          return a.first.localeCompare(b.first) * -1;
        })
      }
      resolve(users);
    });
  }
  
  // Returns a promise that resolves to a
  // user from the "users" array, using the
  // given "id" index. If nothing is found,
  // the promise is rejected.
  export function fetchUser(id) {
    const user = users[id];
  
    if (user === undefined) {
      return Promise.reject(`User ${id} not found`);
    } else {
      return Promise.resolve(user);
    }
  }