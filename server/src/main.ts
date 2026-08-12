import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
  origin: "*",
});

app.get("/stream", (req, res) => {
  res.hijack();
  res.raw.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
  });

  setInterval(() => {
    res.raw.write(`data: ${Math.random()} \n\n`);
  }, 1000);
});
app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});
