import { createAction } from "redux-actions";
import envs from "~/envs/dev.json";

const { APP_ID, BASE_URL } = envs.apis.unsplash;

export const receive_photos = createAction("RECEIVE_PHOTOS");

export const get_photos = ({ query, resultsPerPages = 10 }) => dispatch => {
  const URLS = {
    DEFAULT: `${BASE_URL}photos/?client_id=${APP_ID}`,
    BY_KEYWORD: `${BASE_URL}search/photos/?page=1&per_page=${resultsPerPages}&query=${query}&client_id=${APP_ID}`
  };
  const url = query ? URLS.BY_KEYWORD : URLS.DEFAULT;
  fetch(url)
    .then(res => res.json())
    .then(data => dispatch(receive_photos(data)))
    .catch(err => {
      console.log("Error happened during fetching!", err);
    });
};
