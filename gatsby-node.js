exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;

    createRedirect({
        fromPath: '/',
        toPath: '/links/',
        redirectInBrowser: true,
        isPermanent: false
    })
}