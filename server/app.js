var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var goodsRouter=require('./routes/goods');
var newsRouter=require('./routes/news');
var cors = require('cors');


var app = express();


var corsOptions = {
  origin: 'http://127.0.0.1:8080',
  credentials: true,
  maxAge: '1728000'
  //这一项是为了跨域专门设置的
}
app.use(cors(corsOptions));
//设

// view engine setup  设置当渲染视图时，取当前文件目录下 views 文件夹下的文件
app.set('views', path.join(__dirname, 'views'));

//通过何方式查找引擎
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//设置响应头response header
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin","*");
// 	res.header('Access-Control-Allow-Credentials', true);//告诉客户端可以在HTTP请求中带上Cookie
// 	res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, " +
// 	    "Last-Modified, Cache-Control, Expires, Content-Type, Content-Language, Cache-Control, X-E4M-With,X_FILENAME");
// 	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By",' 3.2.1');
// 	res.header("Content-Type", "application/json;charset=utf-8");

// });



//拦截
app.use(function(req,resp,next){
	console.log("req.originalUrl: "+req.originalUrl);
	console.log("req.path: "+req.path);
	console.log("cookie:"+req.headers.cookie);

	if(req.headers.cookie){
		console.log('已登录');
		next();
	}
	else{
		//白名单
		if(req.originalUrl=='/users/logout' || req.originalUrl=='/users/login' || req.originalUrl=='/news/newsList'  || (req.originalUrl.indexOf('/goods/list')>-1)){
			console.log('白名单  通过！');
			next();
		}
		else{
			console.log('请先登录！');
			resp.json({
				status:'0',
				msg:'请登录',
				result:''
			});

			
		}
	}
})


//路径设置访问/ 时。开通indexRouter下的资源
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/goods',goodsRouter);

app.use('/news',newsRouter);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
