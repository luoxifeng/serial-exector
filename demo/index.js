
async function test() {
  const res1 = await fn1();
  const res2 = await fn2(res1);
  const res3 = await fn2(res2);
  const payload = Object.assign({}, res1, res2, res3);
}

register(fn1)
register(fn2)
register(fn2)

start().then()

register(next => !this.ss && next('ss必填'))

register(next => {
  this.xyz ? next(null, { lll: 123 }) : next(null, { lll: 321 })
});

start();

register(next => {
  const cb = next.async();
  setTimeout(() => {
    !this.ss && cb('ss必填')
  }, 3000)
})

