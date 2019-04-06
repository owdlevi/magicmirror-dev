import config from '../config/config'

export const getBuses = () => {
  const tflAPI = `{config.tfl.API_URL}/StopPoint/490008639S/Arrivals?app_id={config.tfl.APP_ID}&app_key={config.tfl.APP_KEY}`
}

export const ICON_NAME = {
  'partly-cloudy-day': 'PARTLY_CLOUDY_DAY',
  'partly-cloudy-night': 'PARTLY_CLOUDY_NIGHT',
  'clear-day': 'CLEAR_DAY',
  'clear-night': 'CLEAR_NIGHT',
  'rain': 'RAIN',
  'snow': 'SNOW',
  'cloudy': 'CLOUDY',
  'sleet': 'SLEET',
  'wind': 'WIND',
  'fog': 'FOG'
}

export const iconDefault = {
  color: 'white',
  size: 64
}
