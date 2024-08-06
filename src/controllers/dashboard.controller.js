const dashboard = (req, res) => {
  try {
    res.send("Dashboard aqui");
  } catch (err) {
    res.send({ message: err.message });
  }
};

export { dashboard };
