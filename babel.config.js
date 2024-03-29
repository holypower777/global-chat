module.exports = function (api) {
    api.cache(true);

    const targets = 'last 2 Chrome versions';

    const presets = [
        [
            '@babel/preset-env',
            {
                targets,
            },
        ],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
    ];
    const plugins = ['@babel/plugin-transform-runtime', 'react-docgen'];
    const ignore = ['node_modules'];

    return {
        presets,
        plugins,
        ignore,
    };
};
