import { InMemoryCache } from "apollo-cache-inmemory";

export default new InMemoryCache().restore(window.__APOLLO_STATE__);
// export default new InMemoryCache();
