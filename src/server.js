const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  try {
    const server = Hapi.server({
      port: 5000,
      host: "localhost",
    });

    server.route(routes); // Menggunakan route dari routes.js

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

