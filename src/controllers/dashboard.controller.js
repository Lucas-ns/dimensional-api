const dashboard = (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const parts = authorization.split(" ");

    const [schema, token] = parts;

    if (parts.length !== 2) {
      return res.sendStatus(401);
    }

    if (schema !== "Bearer") {
      return res.sendStatus(401);
    }

    res.send("Dashboard aqui");
  } catch (err) {
    res.send({ message: err.message });
  }
};

export { dashboard };
