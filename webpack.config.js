var path = require("path");  //原生的
var webpack = require("webpack");
module.exports = {


//	单页面入口
//	entry :  './src/js/index.js',

//因为添加了react-router 因此入口文件需要改为index.js平级的router.js
	entry :  './src/js/root.js',

//  出口配置
	output : {
		path : path.resolve(__dirname,'./src/'),
		filename : 'bundle.js'
	},
	module: { 
		rules: [    
		  {  
		  	test: /\.js$/,  
		  	exclude: /node_modules/,    //exclede 就是排除那些目录不去查询
		  	loader: "babel-loader" ,
		  	query:{ presets:['react','env']} //react-html-attrs这个插件有没有无所谓 就是在jsx语法中 class需要写成className
		  },
		  { 
		  	test: /\.css$/,   //千万要记住 exclude是不去这个目录去找 可是我们的antd需要去这个目录去找.千万记住.
			loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
			},
		]
	},


}

