const fs = require("fs/promises");

(async () => {
    const files = await fs.readdir(`./public/assets/icon`);

    for (const file of files) {
        const fileName = file.split(".")[0];
        const PascalCase = fileName
            .split("-")
            .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1, chunk.length))
            .join("");

        await fs.writeFile(
            `./components/icons/${fileName}.tsx`,
            `"use client";\n\nimport Comp${PascalCase} from "public/assets/icon/${fileName}.svg"\n\nconst Icon${PascalCase} = (props : {className?:string; style?:React.CSSProperties}) => {\n    return <Comp${PascalCase} {...props}/>\n}\n\nexport default Icon${PascalCase}`
        );
    }
})();
