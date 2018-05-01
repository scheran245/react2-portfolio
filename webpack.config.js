const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) =>{
    // console.log('env = '+env);
    const isProduction = env === 'production';

    return {
        entry:'./src/app.js',
        output:{
            path:__dirname+'/public/',
            filename:'app.js'
        },
        module:{
            rules:[{
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },{
                test:/\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                  })
            }]
        },
        plugins: [
          new ExtractTextPlugin("styles.css")
        ],
        devtool:isProduction ? 'source-map':'cheap-module-eval-source-map',
        devServer:{
            contentBase:__dirname+'/public/',
            historyApiFallback:true
        }
    }
}