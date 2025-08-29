module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        index: './src/index.ts',
        color: './src/color.ts',
        test: './src/test.ts',
        circuit: './src/circuit.ts',
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: [
            ".ts",
            ".js"
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts/, use: "ts-loader", exclude: /node_modules/
            }
        ]
    },
    devServer: {
        static: "./dist",
        port: 4500
    }
};