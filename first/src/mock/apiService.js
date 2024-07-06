import mockData from "../mock/db";
const apiService = {
    getUsers: async()=>{
        return mockData.users;
    },
    getUserById: async (id) => {
        // Simulate fetching a user by ID (async operation)
        const user = mockData.users.find((user) => user.id === id);
        if (!user) {
          throw new Error(`User with id ${id} not found`);
        }
        return user;
      },
    
      addUser: async (userData) => {
        // Simulate adding a new user (async operation)
        const { username, password } = userData;
        const newUser = {
          id: mockData.users.length + 1,
          username,
          password
        };
        mockData.users.push(newUser);
        console.log(mockData.users);
        return newUser;
      }
    };
    
    export default apiService;
