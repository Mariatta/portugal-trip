import { defineConfig } from 'astro/config';

// ⚠️ IMPORTANT: Change the `base` to match your GitHub repository name.
// For example, if your repo is github.com/yourname/portugal-trip, use base: '/portugal-trip'
// If you're using a custom domain or username.github.io repo, use base: '/'

export default defineConfig({
  site: 'https://mariatta.github.io',
  base: '/portugal-trip',
  output: 'static',
  trailingSlash: 'always',
});
