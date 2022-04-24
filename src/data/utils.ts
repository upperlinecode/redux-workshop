const API_KEY = process.env["REACT_APP_GIPHY_API_KEY"];
const API_URL = "https://api.giphy.com/v1/gifs";

interface GiphyAnalytics {
  onload: {
    url: string;
  };
  onclick: {
    url: string;
  };
  onsent: {
    url: string;
  };
}

interface GiphyUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

interface GiphyImages {
  downsized: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
}

interface GiphyData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: GiphyImages;
  user: GiphyUser;
  analytics_response_payload: string;
  analytics: GiphyAnalytics;
}

interface GiphyResp {
  data: GiphyData[];
}

export const getGifs = async (limit = 25): Promise<GiphyResp> => {
  return await fetch(
    `${API_URL}/trending?limit=${limit}&rating=g&api_key=${API_KEY}`
  ).then((resp) => resp.json());
};
