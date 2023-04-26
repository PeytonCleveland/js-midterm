import { type Serve, file } from "bun";

function generateArray() {
  const normalArray = [1, 4, 5, 8, 9, 10, 11, 17, 20, 21, 24, 25, 26, 27, 28];
  const allOdd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  const arrayToUse = Math.random() > 0.5 ? normalArray : allOdd;

  return arrayToUse;
}

export default {
  port: 3005,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/api/exercise-1")
      return Response.json({
        data: generateArray(),
      });
    if (url.pathname === "/exercise-3")
      return new Response(file("exercise-3/index.html"));
    if (url.pathname === "/styles.css")
      return new Response(file("exercise-3/styles.css"));
    if (url.pathname === "/main.js")
      return new Response(file("exercise-3/main.js"));
    return new Response(`404!`);
  },
} satisfies Serve;
