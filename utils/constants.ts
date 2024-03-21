export const BASE_URL = "http://localhost:5173/";
export const REDIRECT_URL = "http://localhost:3000/callback";

export const CLIENT_ID: any = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
export const CLIENT_SECRET: any = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

export const SPOTIFY_ACCESS_TOKEN_URL =
  "https://accounts.spotify.com/api/token";
export const SPOTIFY_URL = "https://api.spotify.com/v1";
export const SCOPE =
  "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";
