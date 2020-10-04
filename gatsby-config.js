/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Les animaux`,
        articleTitle: `Les pandas`,
        project: {
            karry: {
                title: `Karry`,
                type: `Application`,
                year: `2019`,
                img: `./../assets/CaptureLoginKarry.png`,
            },
            horace: {
                title: `Horace`,
                type: `Site Web`,
                year: `2018`
            },
        },
    },
    plugins: [`gatsby-plugin-sass`]
}
