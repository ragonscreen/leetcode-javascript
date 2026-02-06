import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
        test: {
                globals: true,
                environment: 'node',
                include: ['__tests__/**/*.test.js'],
                coverage: {
                        provider: 'v8',
                        reporter: ['text', 'html'],
                        include: ['src/**/*.js'],
                },
                exclude: [
                        ...configDefaults.exclude,
                        '__tests__/problems/shelved/**',
                ],
        },
});
