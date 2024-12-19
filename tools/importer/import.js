const baseUrl = "https://www.aristokraft.com"
const createCarouselBlock = (main, document) => {
    const carouselCells = [['Carousel']];

    document.querySelectorAll('.billboard-basic').forEach((section) => {
        const imageElement = section.querySelector('img');
        const imageSrc = new URL(imageElement.src, baseUrl).href;
        const el = document.createElement('img');
        el.src = imageSrc;
        const titleElement = section.querySelector('h2');
        const title = titleElement ? titleElement.innerText.replace(/\s+/g, "") : 'Resources';
        carouselCells.push([el, title]);
    });
    const table = WebImporter.DOMUtils.createTable(carouselCells, document);
    main.prepend(table);
};


const createArticleBlock = (main, document) => {
    const articleCells = [['Article']];

    document.querySelectorAll('.design-styles .clearfix').forEach((section) => {
        const imageElement = section.querySelector('img');
        const imageSrc = new URL(imageElement.src, baseUrl).href;
        const el = document.createElement('img');
        el.src = imageSrc;
        const titleElement = section.querySelector('h3');
        const title = titleElement ? titleElement.innerText.replace(/\s+/g, "") : '';
		const paragraph = section.querySelector('p');
        const description = paragraph ? paragraph.innerHTML : '';
		const linkElement = section.querySelector('a');
        linkElement.removeAttribute('class');
        const modifiedAnchor = linkElement.outerHTML;
        articleCells.push([el, title + '\n ' + description + '\n' + modifiedAnchor]);
    });

    const table = WebImporter.DOMUtils.createTable(articleCells, document);
    main.prepend(table);
};

export default {
    transformDOM: ({ document, url }) => {
        const main = document.querySelector('.main');
        createCarouselBlock(main, document);
		createArticleBlock(main, document);
		WebImporter.DOMUtils.remove(main, [
            '.interior'
        ]);
        return main;
    }
};
