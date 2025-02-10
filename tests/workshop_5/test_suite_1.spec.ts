import {test, expect} from '@playwright/test'
import { beforeEach } from 'node:test'

test.describe('Testing Suite',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('file:///Users/agbooladaramola/Documents/PlayWright/beginner/tests/workshop_5/index.html');
    })
    //My Test Data
    const testdata ={
        firstName: 'Agboola',
        lastName: 'Daramola',
        address: 'Luxembourg',
        number: '1234567890'
    }
    //Positive Test
    test('Validating Successful Registration @githubAction',async({page})=>{
        
        //Entrying values
        await page.fill('#firstName',testdata.firstName);
        await page.fill('#lastName',testdata.lastName);
        await page.fill('#address', testdata.address);
        await page.fill('#number',testdata.number);
        await page.waitForTimeout(3000);
        await page.click('#register');

        //Capturing values
        const displayFirstName = await page.locator('#displayFirstName').textContent();
        const displayLastName = await page.locator('#displayLastName').textContent();
        const displayAddress = await page.locator('#displayAddress').textContent();
        const displayNumber = await page.locator('#displayNumber').textContent();

        //Validating values
        expect(displayFirstName).toEqual(testdata.firstName);
        expect(displayLastName).toEqual(testdata.lastName);
        expect(displayAddress).toEqual(testdata.address);
        expect(displayNumber).toEqual(testdata.number);
    })
    
    //Negative Testing
    test('Validating Unsuccessful Submission @githubAction',async({page})=>{
        await page.click('#register');

        const error = await page.locator('#error').textContent();
        expect(error).toContain('Please fill in all fields.');
    })

})