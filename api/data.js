const fetchEdificios = async () => {
  try {
    const response = await fetch(
      "https://www.javerianacali.edu.co/ws/data-export/rest/service-edificios"
    );
    const data = await response.json();

    return data.map((data) => {
      const { id, title, descripcion, image } = data;

      const img = `https://www.javerianacali.edu.co/${image}`;

      return {
        id,
        title,
        descripcion,
        image: img,
      };
    });
  } catch (error) {
    console.error("Error al obtener los edificios:", error);
    return [];
  }
};

export default fetchEdificios;
