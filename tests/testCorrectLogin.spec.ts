import { test } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';


let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page);
})

test('Poprawne zalogowanie do systemu', async () => {
  // given
  await ecomm.menu().goToLogin();
  // when
  await ecomm.login().passLoginToPanel();
  // then
  await ecomm.login().checkPassLogin();
});