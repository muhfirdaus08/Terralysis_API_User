const Users = require('../models/users.js');

//GET ALL USER
const getAllUser = async (req, res) => {
  try {
    const getAll = await Users.findAll();

    if (!getAll) {
      return res.status(404).json({
        error: true,
        message: 'User empty',
      });
    }

    return res.status(200).json({
      error: false,
      message: 'Get All User Success',
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      error: 'server error',
      message: error.message,
    });
  }
};

//GET USER BY ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const getUser = await Users.findByPk(id);

    if (!getUser) {
      return res.status(404).json({
        error: true,
        message: 'User not found',
      });
    }

    return res.status(200).json({
      error: false,
      message: 'Get User Success',
      data: getUser,
    });
  } catch (error) {
    return res.status(500).json({
      error: 'server error',
      message: error.message,
    });
  }
};

//UPDATE USER BY ID
const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updateUser = await Users.update(body, { where: { userId: id } });
    if (!updateUser) {
      return res.status(404).json({
        error: true,
        message: 'User not found',
      });
    }

    const dataUpdated = {...body};

    return res.status(200).json({
      error: false,
      message: 'Update User Success',
      data: {
        userId: id,
        data: dataUpdated,
      },
    });
  } catch (error) {}
};

//DELETE USER BY ID
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id);
    const deleteUser = await Users.destroy({ where: { userId: id } });
    if (!deleteUser) {
      return res.status(404).json({
        error: true,
        message: 'User not found',
      });
    }
    return res.status(200).json({
      error: false,
      message: 'Delete User Success',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      error: 'server error',
      message: error.message,
    });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
