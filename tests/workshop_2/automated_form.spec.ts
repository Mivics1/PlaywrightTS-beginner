import {test, expect} from "@playwright/test"

test('Automated Form', async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.waitForTimeout(3000);
    
    //Locating the Textbook and typing the requirement
    const textbox = await page.getByPlaceholder('What needs to be done?');
    await textbox.fill('God loves you');
    await textbox.press('Enter');
    await textbox.fill('My safe heaven');
    await textbox.press('Enter');
    await textbox.fill('You are my safe heaven');
    await textbox.press('Enter');
    await page.waitForTimeout(3000);

    //Selecting all Entries
    const selectAll_entries = await page.locator('#toggle-all');
    await selectAll_entries.check();
    // await selectAll_entries.click();
    await page.waitForTimeout(3000);

    //Delete all Selected entries
    const delete_button = await page.getByRole('button',{name: 'Clear completed'}).click();
    await page.waitForTimeout(3000);


})