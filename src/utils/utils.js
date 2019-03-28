import config from '../config/config'

export const getBuses = () => {
  const tflAPI = `{config.tfl.API_URL}/StopPoint/490008639S/Arrivals?app_id={config.tfl.APP_ID}&app_key={config.tfl.APP_KEY`
}

export const ICON_NAME = {
  'partly-cloudy-day': 'PARTLY_CLOUDY_DAY',
  'clear-day': 'CLEAR_DAY',
  'partly-cloudy-night': 'PARTLY_CLOUDY_NIGHT',
  'clear-night': 'CLEAR_NIGHT'
}

export const iconDefault = {
  color: 'white',
  size: 64
}
