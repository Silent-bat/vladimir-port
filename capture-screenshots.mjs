import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const websites = [
    { url: 'https://delordcosmetics.com/', filename: 'delord-screenshot.png' },
    { url: 'https://ict.nanosatellitemissions.com', filename: 'ict-screenshot.png' },
    { url: 'https://nanosatellitemissions.com/', filename: 'nanosat-screenshot.png' }
];

async function captureScreenshots() {
    for (const site of websites) {
        console.log(`Capturing ${site.url}...`);
        try {
            // Using pnpm exec playwright which is now installed
            const command = `pnpm exec playwright screenshot "${site.url}" "./public/images/${site.filename}" --viewport-size=1920,1080 --full-page`;
            await execAsync(command, { timeout: 60000 });
            console.log(`✓ Captured ${site.filename}`);
        } catch (error) {
            console.error(`✗ Failed to capture ${site.url}:`, error.message);
        }
    }
}

captureScreenshots().then(() => {
    console.log('Screenshot capture complete!');
}).catch(err => {
    console.error('Error:', err);
});
