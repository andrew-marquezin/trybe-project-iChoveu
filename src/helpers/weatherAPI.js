// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();
  if (!data.length) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }
  return data;
//   seu código aqui
};

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  const dataReturn = {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    name: data.location.name,
    country: data.location.country,
    url: cityURL,
  };

  return dataReturn;
//   seu código aqui
};
