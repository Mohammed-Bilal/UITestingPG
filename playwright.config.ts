import { defineConfig, devices } from '@playwright/test';

// Base URLs for different environments
const environments: { [key: string]: string } = {
    local: 'http://localhost:3000',
    prod: 'http://uitestingplayground.com/',
};


// Get current environment or default to 'local'
const env = process.env.ENV || 'local';

const baseURL = environments[env];

if (!baseURL) {
    console.error(`Invalid environment: ${env}. Falling back to 'local'.`);
}

console.log(`Running tests in the '${env}' environment with base URL: ${baseURL}`);

// Determine headless mode from command-line arguments
const isHeadless = process.argv.includes('--headless') || process.argv.includes('-h') || !process.argv.includes('--headed');

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    expect: {
        timeout: 5000,
    },
    fullyParallel: true,
    reporter: 'html',
    use: {
        actionTimeout: 0,
        baseURL, 
        trace: 'on-first-retry',
        launchOptions: {
            headless: isHeadless, 
        },
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
            },
        },
    ],
});

export { baseURL };
