export class mainpro {
    constructor(page) {
        this.page = page;

        this.searchBox = page.locator('#twotabsearchtextbox');
        this.product = page
            .locator('[data-component-type="s-search-result"] a[href*="/dp/"]')
            .filter({ hasText: /shirt|t-shirt|tee|polo/i })
            .first();
        this.addToCartButton = page.locator('#add-to-cart-button, input[name="submit.add-to-cart"]').first();
    }

    async search(searchTerm = 'T shirt') {
        await this.searchBox.waitFor({ state: 'visible', timeout: 15000 });
        await this.searchBox.fill(searchTerm);
        await this.searchBox.press('Enter');
        await this.page.waitForSelector('[data-component-type="s-search-result"]', { timeout: 30000 });
    }

    async clickproduct() {
        await this.product.waitFor({ state: 'visible', timeout: 30000 });

        const href = await this.product.getAttribute('href');
        if (!href) {
            throw new Error('Product link was not found on the search results page.');
        }

        await this.page.goto(new URL(href, 'https://www.amazon.in').toString(), {
            waitUntil: 'domcontentloaded',
            timeout: 30000,
        });
    }

    async addtocart() {
        await this.addToCartButton.waitFor({ state: 'visible', timeout: 30000 });
        await this.addToCartButton.click();
    }
}