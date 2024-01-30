# Karimado Web Scaffold + Arco Design Vue

## Development

1. Install [Docker Desktop](https://docs.docker.com/get-docker/) on your local machine.

2. Open a terminal and type the following commands to start vite dev server:

   ```sh
   # docker services:
   #
   #    vite-devserver - vite dev server
   #           nodedev - node development environment container
   #
   $ COMPOSE_PROFILES="*" docker compose up --build
   ...
   [+] Running 2/2
   ✔ Container karimado-web-scaffold-arco-design-vue-vite-devserver-1  Created                                                                            0.1s
   ✔ Container karimado-web-scaffold-arco-design-vue-nodedev-1         Created
   ...
   ```

3. Visit http://localhost:5173 in your favorite browser.

## License

Licensed under the [MIT License](./LICENSE).
