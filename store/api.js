import Prismic from 'prismic-javascript';
const PrismicConfig = require('../prismic.config');

const apiConfig = () => {
  return Prismic.getApi(PrismicConfig.apiEndpoint, { accessToken: PrismicConfig.token });
}

export default apiConfig;
