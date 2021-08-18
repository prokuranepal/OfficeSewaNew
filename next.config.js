module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://scontent.fktm12-1.fna.fbcdn.net'],
  },
}

const path = require('path')
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  /* bydefault config  option Read For More Optioshere https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true})

module.exports = {
    /* Add Your Scss File Folder Path Here */
    sassOptions: {includePaths: [path.join(__dirname, 'styles')],},
}
