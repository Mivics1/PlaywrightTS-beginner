import {test, expect} from '@playwright/test'

test('Handling Single option Alert @githubAction',async({page})=>{
    await page.goto('https://github.com/Mivics1/PlaywrightTS-beginner/tree/main/tests/workshop_4/index2.html');
    let alertMessage = '';
        page.on('dialog',async(dialog)=>{
            expect(await dialog.type()).toBe('alert');
            alertMessage = await dialog.message();
            await dialog.accept();
        })
    await page.locator('#show-alert.alert-button').click();
    expect(await alertMessage).toBe('This is a simple alert.');
    await page.waitForTimeout(3000);
})

test('Confirm Alert @githubAction',async({page})=>{
    await page.goto('https://github.com/Mivics1/PlaywrightTS-beginner/tree/main/tests/workshop_4/index2.html');
    let alertMessage = '';
        page.on('dialog',async(dialog)=>{
            alertMessage = await dialog.message();
            await dialog.dismiss();
        })
    await page.locator('#show-confirm.alert-button').click();
    expect(await alertMessage).toBe('You clicked Cancel.');
    await page.waitForTimeout(3000);
})

test('Open Pop-up @githubAction',async({page})=>{
    await page.goto('https://github.com/Mivics1/PlaywrightTS-beginner/tree/main/tests/workshop_4/index2.html');
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        // await page.waitForTimeout(3000),
        page.click('#open-popup')
    ]);

    await popup.waitForLoadState();
    await popup.close();
    // await page.waitForTimeout(3000);
    // await page.getByText('Open Pop-up').click();
    // await page.waitForTimeout(3000);
    // await page.locator('#open-popup.open-popup').click();
})