I want this to be the default setup for my project.I have all the files below stored in my project directory. Verify that the setup will work. Write all commands I need to type to install. 
my package.json
{
  "name": "urbalurba-monitor",
  "version": "0.1.0",
  "main": "index.js",
  "repository": "https://github.com/terchris/urbalurba-monitor.git",
  "author": "Terje Christensen <terchris@users.noreply.github.com>",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.20.2",
    "bullmq": "^3.12.0",
    "connect-ensure-login": "^0.1.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4",
    "dotenv": "^16.0.3",
    "winston": "^3.8.2",
    "knex": "^2.4.2",
    "pg": "^8.10.0"
  },
  "devDependencies": {
    "@bull-board/express": "^5.0.1",
    "@types/body-parser": "^1.19.2",
    "@types/connect-ensure-login": "^0.1.7",
    "@types/express-session": "^1.17.7",
    "@types/passport": "^1.0.12",
    "@types/passport-local": "^1.0.35",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.0",
    "@types/knex": "^0.16.1",
    "@types/node": "^18.15.11",
    "copy-webpack-plugin": "^11.0.0",
    "cross-fetch": "^3.1.5",
    "html-webpack-plugin": "^5.5.1",
    "jest": "^29.5.0",
    "jest-environment-jsdom": "^29.5.0",
    "jsdom": "^21.1.1",
    "ts-jest": "^29.1.0",
    "ts-loader": "^9.4.2",
    "webpack": "^5.79.0",
    "webpack-cli": "^5.0.1"
  },
  "scripts": {
    "start": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "yarn build:backend && yarn build:frontend && yarn build:worker",
    "build:backend": "tsc",
    "build:frontend": "tsc -p tsconfig.frontend.json && webpack",
    "build:worker": "tsc --outDir dist src/worker/worker.ts",
    "serve": "node dist/index.js",
    "servedebug": "node --inspect=127.0.0.1:9293 dist/index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "start-worker": "node dist/worker/worker.js"
  }
}

my tsconfig.json:
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ESNext", "dom"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "outDir": "dist",
    "rootDir": "src",
    "sourceMap": true
  },
  "include": ["src/**/*.ts"]
}

my jest.config.js :
module.exports = {
  projects: [
    {
      displayName: 'backend',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/backend/__tests__/**/*.ts'],
      setupFilesAfterEnv: ['./src/shared/gethostconfig.ts'],
    },
    {
      displayName: 'frontend',
      preset: 'ts-jest',
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['<rootDir>/src/frontend/__tests__/**/*.ts'],
      setupFilesAfterEnv: ['./src/shared/gethostconfig.ts', './src/frontend/fetchPolyfill.ts'],
    },
  ],
};

my tsconfig.frontend.json :
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "outDir": "public",
      "sourceMap": true
    },
    "include": ["src/frontend/**/*.ts", "src/frontend/index.html"]
  }

my webpack.config.js :
// webpack.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map', 
  entry: './src/frontend/scriptcities.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'script.js', // Update this line to change the output location
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/frontend/index.html', to: 'index.html' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

my .vscode/launch.json :
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Frontend",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:///*": "${webRoot}/*"
      }
    },
    {
      "name": "Debug Backend",
      "type": "node",
      "request": "attach",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "port": 9293
    }
  ]
}


I have the following directories:
docker
public
src/backend
src/backend/__tests__
src/frontend
src/frontend/__tests__
src/shared
src/shared/__tests__
src/worker
src/worker/__tests__
terchris

