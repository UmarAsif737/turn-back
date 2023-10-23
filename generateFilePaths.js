import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateImageMap() {
	const imagePath = path.join(
		__dirname,
		"./src/routes/media/components/single/images"
	);
	const dirs = await fs.readdir(imagePath);
	const imageMap = {};

	for (const dir of dirs) {
		const imageDirPath = path.join(imagePath, dir);
		const stat = await fs.lstat(imageDirPath);

		if (stat.isDirectory()) {
			const imageFiles = await fs.readdir(imageDirPath);
			imageMap[dir] = imageFiles.filter(
				(file) =>
					file.endsWith(".jpg") ||
					file.endsWith(".png") ||
					file.endsWith(".jpeg")
			);
		}
	}

	await fs.writeFile("./mediaImageMap.json", JSON.stringify(imageMap, null, 2));
}

//generateImageMap().catch(console.error);
