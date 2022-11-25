let store = {};
const cacheStore = (args, data = {}) => {
  let key = args?.toString().trim() || null;
  if (!store[key] && !Object.keys(data).length > 0) {
    return false;
  }
  if (!store[key] && Object.keys(data).length > 0) {
    store[key] = { ...store[key], ...data };
    return;
  }
  return store[key];
};

export default cacheStore;
