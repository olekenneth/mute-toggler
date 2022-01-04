import routes from "./routes.mjs";

export default (path) => {
  const controller = routes.filter((r) => {
    return new RegExp(r.path).test(path);
  });
  if (controller.length > 0) {
    return controller[0].controller;
  }
  return undefined;
};
