#!/usr/bin/env node

// Esbuild is configured with 3 modes:
//
// `yarn build` - Build JavaScript and exit
// `yarn build --watch` - Rebuild JavaScript on change
// `yarn build --reload` - Reloads page when views, JavaScript, or stylesheets change. Requires a PORT to listen on. Defaults to 3200 but can be specified with PORT env var
//
// Minify is enabled when "RAILS_ENV=production"
// Sourcemaps are enabled in non-production environments

import * as esbuild from "esbuild"
import path from "path"
import rails from "esbuild-rails"
// import chokidar from "chokidar"
// import http from "http"
// import { setTimeout } from "timers/promises"

// const clients = []
const entryPoints = [
  "application.js",
]
// const watchDirectories = [
//   "./app/javascript/**/*.js",
//   "./app/views/**/*.html.erb",
//   "./app/assets/builds/**/*.css", // Wait for cssbundling changes
//   "./config/locales/**/*.yml",
// ]

const config = {
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  bundle: true,
  entryPoints: entryPoints,
  minify: process.env.RAILS_ENV == "production",
  outdir: path.join(process.cwd(), "app/assets/builds"),
  plugins: [rails()],
  sourcemap: process.env.RAILS_ENV != "production",
}

if (process.argv.includes("--watch")) {
  let context = await esbuild.context({...config, logLevel: 'info'})
  context.watch();
} else {
  esbuild.build(config);
}
