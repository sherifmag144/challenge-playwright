const { test, expect } = require('@playwright/test');
import ElementsAmazon from '../pages/Elements';
import url from '../paths.json';

let amazon = url.amazonUrl;

test('Amazon Egypt - search iPad, add to cart and verify', async ({ page }) => {
  let element = new ElementsAmazon(page);

  //Open Amazon
  await page.goto(amazon);

  //Search for the work “iPad”
  await element.SearchBox();
  await element.TypeTheText('iPad');
  await element.HeadToSearch();

  //Sort the result with filter “Price:high to low”
  await element.Sort();
  await element.SortHighToLow();
  // eslint-disable-next-line playwright/no-wait-for-timeout
  await page.waitForTimeout(3000);

  //Open the first search result
  await element.FirstSearch();

  //Save the name and price
  const itemName = await element.ElementName();
  const itemPrice = await element.ElementPrice();
  console.log('Item Name:', itemName);
  console.log('Item Price:', itemPrice);

  //Add the item to cart
  await element.AddCartButton();
  // eslint-disable-next-line playwright/no-wait-for-timeout
  await page.waitForTimeout(3000);

  //Navigate to Cart
  await element.Cart();
  // eslint-disable-next-line playwright/no-wait-for-timeout
  await page.waitForTimeout(3000);

  //assert on name & price
  const nameIpad = await element.CartName();
  const priceIpad = await element.CartPrice();
  console.log('Cart Name:', nameIpad);
  console.log('Cart Price:', priceIpad);
  expect(nameIpad).toContain(itemName.slice(0, 40).trim());
  expect(priceIpad).toContain(itemPrice.slice(0, 8).trim());
  //or
  expect(nameIpad).toContain('Apple iPad Pro 13-inch (M4): Ultra Retina XDR display, 1TB');
  expect(priceIpad).toContain('EGP96,000.00');
});
