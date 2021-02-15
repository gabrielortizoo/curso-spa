import getData from "../utilities/getData";
import Character from "./Character";

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results
        .map(
          (Character) => `
          <article class="Characters-item">
            <a href="#/${Character.id}/">
              <img src="${Character.image}" alt="${Character.name}" />
              <h2>${Character.name}</h2>
            </a>
          </article>
      `
        )
        .join("")}
    </div>
    `;
  return view;
};

export default Home;
