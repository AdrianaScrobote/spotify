//import { ServiceError } from '@pub-libs/civ-errors-lib';
import getArtistAlbums from "../../services/get-artist-albums";

export default async function getArtistAlbumsRule(id: string) {
  try {
    if(!id.trim()){
      throw new Error(
        "Informe o parâmetro id"
      );
    }

    return await getArtistAlbums(id);
  } catch (error) {
    throw error;
  }
}
