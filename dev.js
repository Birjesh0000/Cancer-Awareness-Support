#!/usr/bin/env node

import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteBin = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

const child = spawn('node', [viteBin], {
  cwd: __dirname,
  stdio: 'inherit'
});

child.on('exit', (code) => {
  process.exit(code);
});
