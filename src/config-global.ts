import { paths } from 'src/routes/paths';

// API
// ----------------------------------------------------------------------

export const HOST_API = import.meta.env.VITE_HOST_API;
export const ASSETS_API = import.meta.env.VITE_ASSETS_API;

export const MAPBOX_API = import.meta.env.VITE_MAPBOX_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'
export const CLOUD_API = {
  baseurl: import.meta.env.VITE_APP_BASE_URL_CLOUD,
  apiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
  apiToken: import.meta.env.VITE_APP_GOOGLE_API_TOKEN,
};
