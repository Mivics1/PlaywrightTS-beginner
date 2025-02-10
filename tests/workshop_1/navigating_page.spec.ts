import {test} from 'playwright/test'

test.skip('Basic Navigation',async({page})=>{
    await page.goto('https://gitlab.com/');
    await page.getByRole('button',{name:'Accept All Cookies'}).click();
    await page.getByRole('link',{name:'Sign in'}).click();
    await page.waitForTimeout(3000);
    await page.getByTestId('username-field').fill('Michael');
    await page.waitForTimeout(3000);
})

