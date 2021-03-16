
export default function createSerialExector({ merge } = { merge: t => t }) {
  const list = [];

  const register = processor => {
    list.push(processor)
  };

  const start = payload => {
    let i = 0;
    const run = (j = i++) => {
      const processor = list[j];
      if (!processor) return Promise.resolve(payload);
      return new Promise((resolve, reject) => {
        processor(
          data => {
            payload = merge(payload, data || {});
            resolve()
          },
          msg => {
            console.error(msg);
            reject(msg);
          },
          payload
        )
      })
        .then(run)
    }
    return run()
  }

  return { register, start }
}