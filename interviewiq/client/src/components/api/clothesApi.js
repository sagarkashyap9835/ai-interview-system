const BASE_URL = "http://localhost:5000/api/clothesApi";

export const getClothes = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const uploadCloth = async (formData) => {
  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData
  });
  return res.json();
};

export const deleteCloth = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
