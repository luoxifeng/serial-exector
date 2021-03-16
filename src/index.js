
export default function createSerialExector({ merge } = { merge: t => t }) {
  const list = [];

  const register = validator => {
    list.push(validator)
  };

  const start = payload => {
    let i = 0;
    const run = (j = i++) => {
      const validator = list[j];
      if (!validator) return Promise.resolve(payload);
      return new Promise((resolve, reject) => {
        validator(
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