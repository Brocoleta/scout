const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('home','/', async (ctx) => {
  await ctx.render('home', { 
    appVersion: pkg.version,
    resultadoPath: ctx.router.url('resultado-bueno'), });
});
router.get('resultado-bueno','resultado', async (ctx) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const random = getRandomInt(1,6);
  
  await ctx.render('resultado', { 
      volverPath: ctx.router.url('home'),
      random,
          
   });
});
router.get('home-alfa','alfa', async (ctx) => {
  await ctx.render('home', { 
    appVersion: pkg.version,
    resultadoPath: ctx.router.url('resultado-malo'), });
});
router.get('resultado-malo','alfa/resultado', async (ctx) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const random = getRandomInt(1,6);
  
  await ctx.render('resultado-malo', { 
      volverPath: ctx.router.url('home-alfa'),
      random,
          
   });
});
module.exports = router;
