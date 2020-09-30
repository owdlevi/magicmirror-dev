const BASE_URL = `https://magicmirror.crazycode.com`;
const config = {
  weatherAPI: `${BASE_URL}/weather`,
  tflAPI: `${BASE_URL}/bus`,
  messageAPI: `${BASE_URL}/messages`,
  tfl: {
    API_URL: "https://api.tfl.gov.uk",
    APP_ID: "148f05be",
    APP_KEY: "8b44832fbd2a54ed62ab322b92ae26da"
  },
  busStationID: "490008639S",
  removeBus: "E11"
};

export default config;
