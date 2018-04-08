module.exports = {
    webpack: (config, { dev }) => {
        config.module.rules.push(
            {
                test: /\.(less)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            },
            {
                test: /\.less$/,
                use: ['babel-loader', 'raw-loader', 'less-loader']
            }
        );
        return config;
    },
};
// module.exports = withOffline({
//   webpack: (config, { dev }) => {
//     config.resolve.extensions = ['.web.js', '.js', '.json']
//
//     config.module.rules.push(
//       {
//         test: /\.(svg)$/i,
//         loader: 'emit-file-loader',
//         options: {
//           name: 'dist/[path][name].[ext]'
//         },
//         include: [
//           moduleDir('antd-mobile'),
//           __dirname
//         ]
//       },
//       {
//         test: /\.(svg)$/i,
//         loader: 'svg-sprite-loader',
//         include: [
//           moduleDir('antd-mobile'),
//           __dirname
//         ]
//       }
//     )
//
//     return config
//   }
// })
