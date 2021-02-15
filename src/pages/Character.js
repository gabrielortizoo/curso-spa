import getHash from "../utilities/getHash";
import getData from "../utilities/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `<div className="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}" />
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodes: <pan>${character.episode.length}</pan></h3>
        <h3>Status: <pan>${character.status}</pan></h3>
        <h3>Specie: <pan>${character.specie}</pan></h3>
        <h3>Gender: <pan>${character.gender}</pan></h3>
        <h3>Origin: <pan>${character.origin.name}</pan></h3>
        <h3>Last Location: <pan>${character.location.name}</pan></h3>
      </article>
    </div>`;
  return view;
};

export default Character;
