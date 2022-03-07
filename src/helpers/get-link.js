export const getLink = (
    { siteUrl, urlPath }
) => {

    let links = [];

    if (siteUrl && urlPath) {
        const pageLink = { rel: 'canonical', href: `${siteUrl}${urlPath}` };
        links.push(pageLink);
    }

    return links;
}