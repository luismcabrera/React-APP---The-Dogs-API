const getBreeds = async () => {
    const url = "https://api.thedogapi.com/v1/breeds";
    const res = await fetch(url);
    const breeds = await res.json();

    return breeds
}

export default getBreeds;