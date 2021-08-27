import { Router } from "express";
import rules from "../business/rules";
import postAuthorize from "./spotify/post-authorize";
import getSearch from "./spotify/get-search";
import getArtist from "./spotify/get-artist";
import getArtistAlbums from "./spotify/get-artist-albums";

const { getSearchRule, postAuthorizeRule, getArtistRule, getArtistAlbumsRule } = rules;

const RESOURCE = "/spotify";

const spotifyRouter = Router();

spotifyRouter.post(`${RESOURCE}/authorize`, postAuthorize(postAuthorizeRule));
spotifyRouter.get(`${RESOURCE}/search`, getSearch(getSearchRule));
spotifyRouter.get(`${RESOURCE}/artist/:id`, getArtist(getArtistRule));
spotifyRouter.get(`${RESOURCE}/artist-albums/:id`, getArtistAlbums(getArtistAlbumsRule));

export default spotifyRouter;
