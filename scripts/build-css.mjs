import fs from "fs";
import path from "path";
import { compile, optimize } from "@tailwindcss/node";
import { Scanner } from "@tailwindcss/oxide";

async function build() {
  const cssInputPath = path.resolve("./src/app/input.css");
  const cssOutputPath = path.resolve("./src/app/globals.css");

  if (!fs.existsSync(cssInputPath)) {
    fs.writeFileSync(
      cssInputPath,
      `@import "tailwindcss";
`
    );
  }

  const inputCss = fs.readFileSync(cssInputPath, "utf-8");
  const baseDir = process.cwd();

  const scanner = new Scanner({
    sources: [{ base: baseDir, pattern: "src/**/*.{js,jsx,ts,tsx,html}", negated: false }],
  });

  const candidates = scanner.scan();
  console.log(`Scanned ${candidates.length} candidate classes.`);

  const compiler = await compile(inputCss, {
    base: baseDir,
    from: cssInputPath,
    onDependency: () => {},
  });

  const builtCss = compiler.build(candidates);
  const optimized = optimize(builtCss, { minify: false }).code;

  fs.writeFileSync(cssOutputPath, optimized, "utf-8");
  console.log(`Successfully wrote ${optimized.length} bytes to ${cssOutputPath}`);
}

build().catch((err) => {
  console.error("Build CSS error:", err);
  process.exit(1);
});
