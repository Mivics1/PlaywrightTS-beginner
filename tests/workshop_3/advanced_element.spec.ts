import {test, expect} from '@playwright/test'

test('Advancee Element Interactions',async({page})=>{
    await page.goto('file:///Users/agbooladaramola/Documents/PlayWright/beginner/tests/workshop_3/index.html');
    const confirmHover = await page.getByRole('button',{name:'Hover Over Me'}).hover();
    expect(await page.textContent('#hover-me')).toContain('Text Changed!');
    await page.waitForTimeout(3000);

    const rightClick = await page.click('button#context-menu',{button:'right'});
    await page.waitForTimeout(3000);

    const doubleClick = await page.dblclick('button#double-click');
    await page.waitForTimeout(3000);

    await page.locator('.drag-source').hover();
    await page.mouse.down();
    await page.locator('.drop-target').hover();
    await page.mouse.up();
    // const dragAndDrop = await page.dragAndDrop('.drag-source','.drop-target');
    expect(await page.textContent('.drop-target')).toContain('Success');
    await page.waitForTimeout(3000);
})

test('Interacting with IFrame',async({page})=>{
    await page.goto('file:///Users/agbooladaramola/Documents/PlayWright/beginner/tests/workshop_3/index.html');
    const Iframe = await page.frame({name:'iframeName'});
    const textBoxIframe = '#iframe-input'
    if(Iframe){
        await Iframe.fill(textBoxIframe, 'God loves you')
        expect(await Iframe.locator(textBoxIframe).inputValue()).toContain('God loves you');
    } else{
        console.log('Do not give up Michael')
    }
    await page.waitForTimeout(3000);
})