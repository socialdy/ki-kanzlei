import { injectInternalLinks } from './src/utils/blogLinkInjector';

console.log('Testing DISABLED blogLinkInjector...\n');

const test1 = "Wichtige Erkenntnisse dieses Beitrags";
const result1 = injectInternalLinks(test1);
console.log('Test 1:');
console.log('  Input:  ', test1);
console.log('  Output: ', result1);
console.log('  Status: ', result1 === test1 ? '✓ PASS - No changes' : '✗ FAIL');
console.log();

const test2 = "Das RAG Modell ist super.";
const result2 = injectInternalLinks(test2);
console.log('Test 2:');
console.log('  Input:  ', test2);
console.log('  Output: ', result2);
console.log('  Status: ', result2 === test2 ? '✓ PASS - No changes' : '✗ FAIL');
console.log();

const test3 = '<h3>Wichtige Erkenntnisse dieses Beitrags</h3>';
const result3 = injectInternalLinks(test3);
console.log('Test 3:');
console.log('  Input:  ', test3);
console.log('  Output: ', result3);
console.log('  Status: ', result3 === test3 ? '✓ PASS - No changes' : '✗ FAIL');
