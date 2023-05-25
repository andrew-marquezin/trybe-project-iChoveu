// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN

export const searchCities = (term) => {
fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`)
  .then(response => response.json())
  .then(data => {
    if (!data.length) {
      window.alert('Nenhuma cidade encontrada')
      return [];
    }
    return data;
  })
  .catch(error => error)
//   seu código aqui
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
