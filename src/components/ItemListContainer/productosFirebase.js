import db from "./firebaseConfig.js";

export const pedirProductos = () => {
  return db
    .collection("productos")
    .get()
    .then((querySnapshot) => {
      const productos = [];
      querySnapshot.forEach((doc) => {
        productos.push(doc.data());
      });
      return productos;
    })
    .catch((error) => {
      throw new Error("Error al obtener los productos: " + error.message);
    });
};

export const pedirItemporId = async (id) => {
  try {
    const doc = await db.collection("productos").doc(id).get();
    if (doc.exists) {
      return doc.data();
    } else {
      throw new Error("No se encontró el producto");
    }
  } catch (error) {
    throw new Error("Error al obtener el producto: " + error.message);
  }
};

