import { test } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';


let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page);
})

test('Próba zalogowania do systemu z błędnymi danymi', async () => {
  // given
  await ecomm.menu().goToLogin();
  // when
  await ecomm.login().errorLoginToPanel();
  // then
  await ecomm.login().checkErrorLogin()
});