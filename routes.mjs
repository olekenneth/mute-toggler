import { JSONCacheHeaders, SSEHeaders } from "./utils.mjs";
import { readFileSync } from "fs";
const index = readFileSync("views/index.html");

const routes = [
  {
    path: RegExp("^/$"),
    controller: (path, req, res) => {
      return res.end(String(index));
    },
  },
  {
    path: "/health",
    controller: (path, req, res) => res.end("health ok"),
  },

  {
    path: "/sse",
    controller: (path, req, res, state) => {
      res.writeHead(200, SSEHeaders);
      setInterval(() => {
        const content =
          "event: state\n" + "data: " + JSON.stringify(state) + "\n\n";
        res.write(content);

        // let lastState = { ping: Date.now(), muted: state.muted };

        // setInterval(() => {
        //   let content = "event: ping\n\n";
        //   if (state.muted !== lastState.muted) {
        //     content =
        //       "event: state\n" + "data: " + JSON.stringify(state) + "\n\n";
        //     lastState = {
        //       muted: state.muted,
        //       ping: 0,
        //     };
        //   }
        //   if (Date.now() - lastState.ping > 3000) {
        //     res.write(content);
        //     lastState.ping = Date.now();
        //   }
      }, 500);
    },
  },
  {
    path: "/state",
    controller: (path, req, res, state) => {
      return res.writeHead(200, JSONCacheHeaders).end(JSON.stringify(state));
    },
  },
  {
    path: "/mute",
    controller: (path, req, res, state) => {
      state["muted"] = true;
      return res.writeHead(200, JSONCacheHeaders).end(JSON.stringify(state));
    },
  },
  {
    path: "/unmute",
    controller: (path, req, res, state) => {
      state["muted"] = false;
      return res.writeHead(200, JSONCacheHeaders).end(JSON.stringify(state));
    },
  },
];

export default routes;
