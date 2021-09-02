#!/bin/bash

npm install
npx typeorm migrations:run
npm run build
npm run dev
