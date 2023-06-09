const bcrypt = require ('bcrypt');
const Users = require ('../models/users.js');

// Validasi email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  // Validasi email
  if (!validateEmail(email)) {
    return res.status(400).json({
      error: true,
      message: 'Invalid email format',
    });
  }

  try {
    // Cek apakah email sudah terdaftar sebelumnya
    const existingUser = await Users.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({
        error: true,
        message: 'Email already registered',
      });
    }

    // Enkripsi password menggunakan bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user ke database
    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json({
      error: false,
      message: 'Register success',
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: 'An error occurred during registration',
    });
  }
};

module.exports = registerController
