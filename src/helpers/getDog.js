const getDog = async (breedId) => {
    const url = !breedId || breedId === 0
    ? "https://api.thedogapi.com/v1/images/search"
    : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId

    const res = await fetch(url);

    if(!res.ok) {
        const { url, status, statusText } = res;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
    }

    const [data] = await res.json();

    let { url: image, breeds: [breed] } = data;

    if(!breed) {
        breed = {
            id: 0,
            name: 'random'
        }
    }

    const dog = {
        image,
        breed,
      }

    return dog;
}

export default getDog;