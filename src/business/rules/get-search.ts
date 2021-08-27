//import { ServiceError } from '@pub-libs/civ-errors-lib';
import getSearch from "../../services/get-search";

function validType(type: string) {
  if (!type) {
    throw new Error(
      "Informe o parâmetro type! Deve ser: album, artist, playlist, track, show, episode"
    );
  }

  let types = type.split(",");

  types.map((item) => {
    if (
      item &&
      !["album", "artist", "playlist", "track", "show", "episode"].includes(
        item
      )
    ) {
      throw new Error(
        `O tipo ${item} é inválido! Deve ser: album, artist, playlist, track, show, episode`
      );
    }
  });

  return true;
}

export default async function getSearchRule(type: string, search: string) {
  try {
    
    validType(type)

    if(!search){
      throw new Error(
        "Informe o parâmetro search com a informação que deseja pesquisar"
      );
    }

    return await getSearch(type, search);
  } catch (error) {
    throw error;
  }
}
