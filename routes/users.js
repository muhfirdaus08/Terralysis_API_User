var express = require('express');
var router = express.Router();

const checkAuthorization = require('../controllers/auth.js');
const registerController = require('../controllers/register.js');
const loginController = require('../controllers/login.js');
const logoutController = require('../controllers/logout.js');
const user = require('../controllers/users.js');

// Route untuk register user
const register = router.post('/register', registerController);

// Route untuk login user
const login = router.post('/login', loginController);

// Route untuk mendapatkan semua user
const getAllUser = router.get('/users', user.getAllUser);

// Route untuk mendapatkan user berdasarkan id
const getUserById = router.get('/users/:id', checkAuthorization, user.getUserById);

// Route untuk edit user berdasarkan id
const updateUserById = router.patch('/users/:id', checkAuthorization, user.updateUserById);

// Route untuk mengapus user berdasarkan id
const deleteUserById = router.delete('/users/:id', checkAuthorization,user.deleteUserById);

// Route untuk logout (mengirim pesan json "Logout success");
const logout = router.post('/logout', checkAuthorization, logoutController);

module.exports = {
  register,
  login,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
  logout,
};
