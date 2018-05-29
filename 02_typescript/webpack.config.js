module.exports = {
    devtool: 'inline-source-map',
    entry: "./main.ts",
    context: __dirname, // identifier tsconfig.json automatiquement
    output: {
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
        { test: /\.tsx?$/, // ts & tsx gérés
            loader: 'ts-loader',
            options: {
              transpileOnly: true 
            } 
        }]
    }
};