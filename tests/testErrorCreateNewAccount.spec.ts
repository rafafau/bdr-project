import { test } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';


let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page);
})

test('Próba utworzenia nowego konta z błednym hasłem', async () => {
  // given
  await ecomm.menu().goToSingUp();
  // when
  await ecomm.login().errorCreateNewAccount();
  // then
  await ecomm.login().checkErrorCreateNewAccount();
});