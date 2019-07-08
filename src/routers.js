const koaRouter = require('koa-router');
const views = require('koa-views');
const router = new koaRouter();

router.get('/data',(ctx) => {
    ctx.body = require('./data/curriculo.json');
});

router.use(views(__dirname+"/views/", { map: {html: 'nunjucks' }}))

router.get('/',async function(ctx){
    await ctx.render('index', {
        data: require('./data/curriculo.json')
      });
})

module.exports = router;
