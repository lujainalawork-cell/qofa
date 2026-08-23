const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const contentTypes = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".png": "image/png"
};

http.createServer((request, response) => {
    const pathname = new URL(request.url, "http://localhost").pathname;
    const relativePath = pathname === "/"
        ? path.join("templates", "index.html")
        : pathname.startsWith("/static/")
            ? pathname.slice(1)
            : null;

    if (!relativePath) {
        response.writeHead(404);
        response.end("Not found");
        return;
    }

    const filePath = path.resolve(root, relativePath);
    if (!filePath.startsWith(`${root}${path.sep}`)) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            response.writeHead(404);
            response.end("Not found");
            return;
        }

        response.writeHead(200, {
            "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream",
            "Cache-Control": "no-store"
        });
        response.end(content);
    });
}).listen(8080, "127.0.0.1", () => {
    console.log("Qofa preview available at http://127.0.0.1:8080/");
});
