import path from "path";
import fs from "fs"

const ROOT = "./src"

const root_path = path.join(__dirname, ROOT)
const root_content: string[] = new Array()

fs.readdir(root_path, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(
        file => root_content.push(file)
    )
})

const PATHS: {[key: string]: string} = {
    "/": "/index.html"
}

const server = Bun.serve({
	port: 3000,
	fetch(request) {
        const path_name = new URL(request.url).pathname

        if (path_name in PATHS)
            return new Response(Bun.file(`${ROOT}${PATHS[path_name]}`));

        if (root_content.includes(path_name.replace("/", "")))
            return new Response(Bun.file(`${ROOT}${path_name}`));

        return new Response("404 Fichier non-trouvable.");
	},
});

console.log(`Listening on ${server.url}`);
