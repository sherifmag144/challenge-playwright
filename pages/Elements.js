class ElementsAmazon {
  constructor(page) {
    this.page = page;
  }
  SearchBox() {
    return this.page.getByRole('searchbox', { name: 'Search Amazon.eg' }).click();
  }
  TypeTheText(text) {
    return this.page.getByRole('searchbox', { name: 'Search Amazon.eg' }).fill(text);
  }
  HeadToSearch() {
    return this.page.getByRole('button', { name: 'Go', exact: true }).click();
  }
  Sort() {
    return this.page.locator('#a-autoid-0-announce').click();
  }
  SortHighToLow() {
    return this.page.locator('#s-result-sort-select_2').click();
  }
  FirstSearch() {
    return this.page.locator("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] div[class='a-section aok-relative s-image-square-aspect']").click();
  }
  ElementName() {
    return this.page.locator('#productTitle').innerText();
  }
  ElementPrice() {
    return this.page.locator("span[class='a-price aok-align-center reinventPricePriceToPayMargin priceToPay'] span[aria-hidden='true']").innerText();
  }
  AddCartButton() {
    return this.page.locator('#add-to-cart-button').click();
  }
  Cart() {
    return this.page.locator('.nav-cart-icon.nav-sprite').click();
  }
  CartName() {
    return this.page.locator('.a-truncate-cut').innerText();
  }
  CartPrice() {
    return this.page.locator("span[class='a-price a-text-price sc-product-price sc-white-space-nowrap a-size-medium'] span[aria-hidden='true']").innerText();
  }
}
export default ElementsAmazon;
