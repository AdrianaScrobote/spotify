import getArtist from "../../services/get-artist";

export default async function getArtistRule(id: string) {
  try {
    if(!id.trim()){
      throw new Error(
        "Informe o parâmetro id"
      );
    }

    return await getArtist(id);
  } catch (error) {
    throw error;
  }
}
