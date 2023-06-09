const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/users.js');
const jwtKey = require('../config/jwt.js');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  // Cari pengguna dengan email yang cocok
  const user = await Users.findOne({ where: { email } });

  if (!user) {
    // Jika pengguna tidak ditemukan, kirim respons error
    return res.status(401).json({
      error: true,
      message: 'Invalid email/password or user not found',
    });
  }

  // Pengecekan password
  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    // Jika password tidak cocok, kirim respons error
    return res.status(401).json({
      error: true,
      message: 'Invalid email or password',
    });
  }

  // Jika email dan password valid, buat token JWT
  const token = jwt.sign({ userId: user.userId }, jwtKey.jwtSecret);

  // Kirim respons dengan informasi login dan token JWT
  return res.json({
    error: false,
    message: 'login success',
    loginResult: {
      userId: user.userId,
      name: user.name,
      email: user.email,
      token: token,
    },
  });
};

module.exports = loginController;
