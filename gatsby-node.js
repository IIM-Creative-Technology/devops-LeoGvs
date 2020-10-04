//exports.onCreateNode = ({ node, getNode }) => {
//    if (node.internal.type === `MarkdownRemark`) {
//        const fileNode = getNode(node.parent)
//        console.log(`\n`, fileNode.relativePath)
//    }
//}

exports.onCreateWebpackConfig = ({
                                     actions,
                                 }) => {
    const { setWebpackConfig } = actions;
    setWebpackConfig({
        externals: {
            jquery: 'jQuery', // important: 'Q' capitalized
        }
    })
}