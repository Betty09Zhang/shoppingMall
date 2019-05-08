    const htmlWebpackPlugin = require('html-webpack-plugin');

    const path = require('path')
    module.exports = {
        entry:{ //main是默认入口,也可以是多入口
            main:'./src/main.js'
        },
        //出口
        output:{
            filename:'./bundle.js', //指定js文件
            path: path.join(__dirname,'dist')          //最好是绝对路径
            //代表当前目录的上一级的dist
        },
        module:{
        	 loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.(jpg|png|svg|ttf|woff|woff2|gif|eot)(\?.*)?$/i,
                loader: 'url-loader',
                options: {
                    limit: 1000, //4096字节以上生成文件，否则base6
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015','stage-3'], //关键字
                    plugins: ['transform-runtime'], //函数
                    comments:false
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                 loaders: {
                 'scss': 'style-loader!css-loader!sass-loader'
                    }
                 }
            }
        ]

            
        },

        plugins:[

            //插件的执行顺序是依次执行的
            new htmlWebpackPlugin({
                template:'./index.html',
                }),
                //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录


            
        ]



    }
