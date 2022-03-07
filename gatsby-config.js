module.exports = {
    siteMetadata: {
        title: `Landing Page Title`,
    },
    plugins: [
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                stages: ["develop"],
                extensions: ["js", "jsx"],
                exclude: ["node_modules", ".cache", "public"],
                // Any eslint-webpack-plugin options below
            }
        },
        {
            resolve: "gatsby-plugin-sass",
            options: {
                sassOptions: {},
                additionalData: `@import "${__dirname}/src/styles/styles";`,
            }
        },
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-json",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    formats: ["auto", "webp"],
                    placeholder: "dominantColor",
                    quality: 95,
                    breakpoints: [200, 370, 480, 600, 840, 960, 1280, 1600, 1920],
                    backgroundColor: "transparent",
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                }
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-remove-trailing-slashes",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Waterproof Jack",
                short_name: "WaterproofJ",
                start_url: "/",
                background_color: "#0969E5",
                theme_color: "#0969E5",
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: "standalone",
                icon: "data/default-images/waterproofjack/favicon.png", // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://www.waterproofjack.com",
                sitemap: "https://www.waterproofjack.com/sitemap.xml",
                policy: [{ userAgent: "*", allow: "/" }, { userAgent: "*", disallow: "/filter*" }]
            }
        },
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "UA-110214159-1", // Google Analytics / GA
                    //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared accross all trackingIds
                // gtagConfig: {
                //   optimize_id: "OPT_CONTAINER_ID",
                //   anonymize_ip: true,
                // },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    //exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
        "gatsby-plugin-remove-serviceworker",
    ],
}