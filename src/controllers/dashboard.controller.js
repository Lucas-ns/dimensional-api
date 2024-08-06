const dashboard = (req, res) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    res.send({ message: err.message });
  }
};

export { dashboard };
