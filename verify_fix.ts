import { injectInternalLinks } from './src/utils/blogLinkInjector';

console.log('Testing blogLinkInjector fix...\n');

// Test 1: Should NOT modify "Beitrags" (contains "rag" but is not the word "rag")
const test1 = "Wichtige Erkenntnisse dieses Beitrags";
const result1 = injectInternalLinks(test1);
console.log('Test 1 - Partial word match:');
console.log('  Input:  ', test1);
console.log('  Output: ', result1);
console.log('  Status: ', result1 === test1 ? '✓ PASS' : '✗ FAIL');
console.log();

// Test 2: SHOULD modify "RAG" (whole word)
const test2 = "Das RAG Modell ist super.";
const result2 = injectInternalLinks(test2);
console.log('Test 2 - Whole word match:');
console.log('  Input:  ', test2);
console.log('  Output: ', result2);
console.log('  Status: ', result2.includes('<a href="/#loesungen"') ? '✓ PASS' : '✗ FAIL');
console.log();

// Test 3: Should NOT modify "Wissensdatenbanks" (plural suffix)
const test3 = "Die Wissensdatenbanks sind wichtig.";
const result3 = injectInternalLinks(test3);
console.log('Test 3 - Word with suffix:');
console.log('  Input:  ', test3);
console.log('  Output: ', result3);
console.log('  Status: ', result3 === test3 ? '✓ PASS' : '✗ FAIL');
console.log();

// Test 4: SHOULD modify "Wissensdatenbank" (exact match)
const test4 = "Eine Wissensdatenbank ist nützlich.";
const result4 = injectInternalLinks(test4);
console.log('Test 4 - Exact word match:');
console.log('  Input:  ', test4);
console.log('  Output: ', result4);
console.log('  Status: ', result4.includes('<a href="/#loesungen"') ? '✓ PASS' : '✗ FAIL');
console.log();

// Test 5: Original corruption case
const test5 = '<h3>Wichtige Erkenntnisse dieses Beitrags</h3>';
const result5 = injectInternalLinks(test5);
console.log('Test 5 - Original corruption case:');
console.log('  Input:  ', test5);
console.log('  Output: ', result5);
console.log('  Status: ', result5 === test5 ? '✓ PASS' : '✗ FAIL');
