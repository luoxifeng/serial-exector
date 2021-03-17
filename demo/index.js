
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

var j = {

  validate(payload) {
    if (!this.ss) {
      this.$alert('ss必填');
      return Promise.reject();
    }

    if (!this.dd) {
      this.$alert('dd必填');
      return Promise.reject();
    }

    /**
     * 这里是关键
     * 当xyz满足条件的时候 
     * 我们需要向提交参数上面赋值其他的参数
     * 或者改写上面的某些值
     */

    if (this.xyz) {
      this.$alert('dd必填');
      payload.lll = 123
      payload.ddd = 123
    } else {
      payload.lll = 321
      payload.ddd = 321
    }

    return Promise.resole();
  },
  async submit() {
    // 基本参数
    const base = {
      dddlll: this.lllds,
    }
    await this.validate(base)
    submitAjax(base)

  }
}

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

