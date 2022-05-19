const fetch = require("isomorphic-fetch");
const fetchPokemon = require("./script3");
it("find the pokemon from PokeAPI and return its name height weight", (done) => {
  expect.assertions(3);
  fetchPokemon("pikachu", fetch).then((data) => {
    expect(data.name).toBe("pikachu");
    expect(data.height).toBe(4);
    expect(data.weight).toBe(60);
    done();
  });
});
