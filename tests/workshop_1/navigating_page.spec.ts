import {test} from 'playwright/test'

test('Basic Navigation', async({page})=>{
    await page.goto('https://gitlab.com/');
    await page.waitForTimeout(3000);
    await page.reload();
})

// test.only('Interacting with Web Element on Gitlab',async({page})=>{
//     await page.goto('https://gitlab.com/');
//     await page.click('');
//     await page.locator('');
// })