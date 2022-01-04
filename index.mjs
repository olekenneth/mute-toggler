import { createServer } from "http";
import Router from "./router.mjs";
const state = {
  muted: false,
};

const requestListener = function (req, res) {
  const { url } = req;

  const ViewController = Router(url);

  if (ViewController) {
    return ViewController(url, req, res, state);
  }

  return res.writeHead(404).end("404");
};

const server = createServer(requestListener);
server.listen(29290);
