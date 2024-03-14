# Karimado Web + Arco Design Vue

## Requirements

- Node 20, and Pnpm 8.14

## Development

### Option 1: Docker (Recommended)

1. Install [Docker Desktop](https://docs.docker.com/get-docker/) on your local machine.

2. Open a terminal and type the following commands to start vite dev server:

   ```console
   # docker services:
   #
   #    vite-devserver - vite dev server
   #           nodedev - node development environment container
   #
   $ bin/dcupb
   ...
   [+] Running 2/2
   ✔ Container karimado-web-arco-design-vue-vite-devserver-1  Created
   ✔ Container karimado-web-arco-design-vue-nodedev-1         Created
   ...
   ```

3. Visit http://localhost:5173 in your favorite browser.

### Option 2: Local Node Development Environment

1. Install [Node](https://nodejs.org/en/download) and [Pnpm](https://pnpm.io/installation) on your local machine.

2. Open a terminal and type the following commands to setup your local development environment **(only execute once)**:

   ```console
   $ bin/setup
   Lockfile is up to date, resolution step is skipped
   Progress: resolved 521, reused 521, downloaded 0, added 521, done
   ...
   ```

3. Open a terminal and type the following commands to start vite dev server:

   ```console
   $ bin/dev
   VITE v5.0.12  ready in 558 ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ➜  press h + enter to show help
   ...
   ```

4. Visit http://localhost:5173 in your favorite browser.

## License

Licensed under the [MIT License](./LICENSE).
