const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const webRoot = __dirname;
const distRoot = path.join(projectRoot, "dist");
const clientRoot = path.join(distRoot, "client");

fs.rmSync(distRoot, { recursive: true, force: true });
fs.mkdirSync(path.join(distRoot, "server"), { recursive: true });
fs.mkdirSync(clientRoot, { recursive: true });

fs.copyFileSync(
    path.join(webRoot, "templates", "index.html"),
    path.join(clientRoot, "index.html")
);
fs.copyFileSync(
    path.join(webRoot, "site-worker.js"),
    path.join(distRoot, "server", "index.js")
);
fs.cpSync(path.join(webRoot, "static"), path.join(clientRoot, "static"), { recursive: true });

console.log("Public Qofa site built in dist/.");
