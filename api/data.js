const fetchEdificios = async () => {
  try {
    const response = await fetch(
      "https://www.javerianacali.edu.co/ws/data-export/rest/service-edificios"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los edificios:", error);
    return [];
  }
};

export default fetchEdificios;
