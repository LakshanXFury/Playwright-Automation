// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests', // What steps to run
  timeout: 40000, // Timeout for 40k millsec
  expect : { // Assertion timeout
    timeout: 40000, 
  },
  reporter : 'html',

  use: {
    browserName : 'chromium', // Run in the Chrome
    // headless : false,
    screenshot : 'only-on-failureb', // Screenshot where it failed
    trace : 'on' // Detailed report for all the test cases with screenshot
    
  }

});

module.exports = config //Variable config is exported to all the objects across the projects.
