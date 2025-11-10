async function controllerMainRoute(req, res, next) {
  try {
    console.log("Route Reached");
    res.json([{ Welcome: "Welcome to To do list Api" }]);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

export { controllerMainRoute };
