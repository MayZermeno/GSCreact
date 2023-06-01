import { doc, getDoc ,collection,getDocs, getFirestore } from "firebase/firestore";

export const getProductos = async (collections)=>{
  const db = getFirestore();
  const ProductosCollection = collection (db,collections);
  const result= await getDocs(ProductosCollection);
  return result.docs.map((doc)=>({id:doc.id, ...doc.data()}))
};

export const getDocument = async(collections, idDocuments)=>{
  const db = getFirestore();
  const productRef = doc(db,collections,idDocuments);

  getDoc(productRef).then((snapshot)=>{
      if (snapshot.exists()){
          return({id:snapshot.id,...snapshot.data()});
      }  
      });
      };



      