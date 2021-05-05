const defopts = { 
    merge: t => t 
  }

export default function createSerialExector( opts) {
  const { merge } = { ...defopts, ...opts }
  const list = [];

  const register = list.push.bind(list)

  const start = payload => {
    let i = 0;
    const run = () => {
      const processor = list[i++];
      if (!processor) return Promise.resolve(payload);
      return new Promise((resolve, reject) => {
        const ctl = {
resolve(data){
            payload = merge(payload, data || {});
            resolve()
          },
reject,
          payload
        }
processor(ctl)
      })
        .then(run)
    }
    return run()
  }

  return { register, start }
}

