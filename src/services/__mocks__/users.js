const mockUserService = {
  getUser: jest.fn(),
  getSession: jest.fn(),
  signUpUser: jest.fn().mockImplementation(() => ({ id: 1 })),
  signInUser: jest.fn().mockImplementation(() => ({ id: 1 })),
  signOutUser: jest.fn(),
};

export default mockUserService;
