import path from 'path';
// path nodeのモジュールでデフォで入ってる

// webpackで生成下JSやCSSを埋め込んだHMTLを作成する
import HtmlWebpackPlugin from 'html-webpack-plugin';

//path.resolveで 絶対pathに変換  joinもあるらしい
const src = path.resolve(__dirname,'src');
const dist = path.resolve(__dirname, 'dist');


export default {
    // webpack4から使えるようになったらしい
    mode: 'development',
    
    // エントリーポイント　webpackのbuildの開始点
    entry: src + '/index.js',

    // bundleファイルの出力場所とファイル名
    output: {
        path: dist,
        filename: 'bundle.js'
    },

    // ソースマップ
    devtool: 'inline-cheap-source-map',

    // bundleファイルを作るために、色々な種類のファイルを変換する
    module: {
        rules: [
            {
                // testでどの種類のファイルを処理するか特定
               test: /\.js$/,
               exclude: /node_module/,

                //このloaderを使ってbundleファイルに追加する前に変換
               loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    // linkタグに出力する機能
                    "style-loader",

                    // CSSをバンドルする
                    {
                        loader: "css-loader",
                        options: {
                            // CSS内のurlの読み込みのやつ
                             url: true,

                            //  css-loader,sass-loader
                             importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        
                    }
                ]
            }
        ]
    },

    // 拡張子の指定？
    resolve: {
        extensions: ['.js']
    },

    // webpackのできることを増やす
    plugins:[

        // HtmlWebpackPluginの読み込み
        new HtmlWebpackPlugin({
            template: src + '/index.html',
            filename: 'index.html'
        })
    ]
}