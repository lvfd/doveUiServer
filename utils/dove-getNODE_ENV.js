const node_env = process.env.NODE_ENV
module.exports = {
    dev: node_env === 'development',
    pro: node_env === 'production',
}