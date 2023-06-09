const logoutController = (req, res) => {
  //   nothing
  return res.json({
    error: false,
    message: 'Logout success',
  });
};

module.exports = logoutController;
