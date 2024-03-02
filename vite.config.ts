import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			interfaces: path.resolve(__dirname, 'src/interfaces'),
			assets: path.resolve(__dirname, 'src/assets'),
			pages: path.resolve(__dirname, 'src/pages'),
			styles: path.resolve(__dirname, 'src/styles'),
			data: path.resolve(__dirname, 'src/data'),
		},
	},
	
});
