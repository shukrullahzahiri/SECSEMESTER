import { snake, createVideo, parseDateString, toDateString, normalizeCoord, formatCoords, mimeFromFilename, generateLicenseLink, pureBool, buildUrl } from './qap2.js';

// Example usage of functions from qap2.js

// Problem 1: Testing the snake function
console.log(snake(' ABC ')); // Should output 'abc'

// Problem 2: Testing the createVideo function
const videoHTML = createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true);
console.log(videoHTML);

// Problem 3: Testing the parseDateString function
try {
    const date = parseDateString('2021-01-01');
    console.log(date);
} catch (error) {
    console.error(error.message);
}

// Problem 4: Testing the toDateString function
const currentDate = new Date();
const dateString = toDateString(currentDate);
console.log(dateString);

// Problem 5: Testing the normalizeCoord function
try {
    const coord = normalizeCoord('42.9755,-77.4369');
    console.log(coord);
} catch (error) {
    console.error(error.message);
}

// Problem 6: Testing the formatCoords function
const formattedCoords = formatCoords('42.9755,-77.4369', '[-62.1234, 42.9755]');
console.log(formattedCoords);

// Problem 7: Testing the mimeFromFilename function
const mimeType = mimeFromFilename('image.jpg');
console.log(mimeType);

// Problem 8: Testing the generateLicenseLink function
const licenseLink = generateLicenseLink('CC-BY-NC', true);
console.log(licenseLink);

// Problem 9: Testing the pureBool function
try {
    const boolValue = pureBool('true');
    console.log(boolValue);
} catch (error) {
    console.error(error.message);
}

// Problem 10: Testing the buildUrl function
try {
    const url = buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by');
    console.log(url);
} catch (error) {
    console.error(error.message);
}
