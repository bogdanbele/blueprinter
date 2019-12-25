const dotenv = require("dotenv").config()

module.exports = {
    siteMetadata: {
        title: 'ncweb',
        description: 'Before Steve Jobs was the real Big Mac.',
        author: '@bogdanbele',
        googleSiteVerification: '4cc8dQeX-HmctmVYEJBxO4I4M6BS7kE_Db4is7suBQw',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_KEY,
            },
        },
        'gatsby-plugin-dark-mode',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /logo/
                }
            }
        },
		{
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/config/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'ncweb',
                short_name: 'ncweb',
                start_url: '/',
                background_color: '#0096ff',
                theme_color: '#0096ff',
                display: 'minimal-ui',
                icon: 'src/config/logo/main-icon.png', // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ],
};
