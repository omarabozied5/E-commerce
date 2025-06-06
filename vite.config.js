import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    define: {
      "process.env": JSON.stringify(process.env),
    },
    plugins: [react()],
  });
};

// import { defineConfig, loadEnv } from 'vite';

// export default ({ mode }) => {
//     // Load app-level env vars to node-level env vars.
//     process.env = {...process.env, ...loadEnv(mode, process.cwd())};

//     return defineConfig({
//       // To access env vars here use process.env.TEST_VAR
//     });
// }
