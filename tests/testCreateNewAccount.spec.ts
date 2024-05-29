import { test } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';


let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page);
})

test('Poprawne utworzenie nowego konta', async () => {
  // given
  await ecomm.menu().goToSingUp();
  // when
  await ecomm.login().passCreateNewAccount();
  // then
  await ecomm.login().checkPassCreateNewAccount();
});