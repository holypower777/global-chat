module.exports = function(api) {
    api.cache(true);

    const targets = 'last 2 versions';

    const presets = [
        [
            '@babel/preset-env',
            {
                targets,
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ];

    const ignore = ['node_modules'];

    return {
        presets,
        ignore,
    };
};
