import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
	// Enable Preact to support Preact JSX components.
	integrations: [preact()],svelte,
});
