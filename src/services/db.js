import firebase from "firebase/app";
import "firebase/firestore";

let db;
function getDb() {
  if (!db) {
    db = firebase.firestore();
  }
  return db;
}

export async function listCollection(collection) {
  try {
    const db = getDb();
    const querySnapshot = await db.collection(collection).get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })  
    });
    return { success: true, data };
  } catch(error) {
    console.log('IMTCHLG ~ file: db.js ~ line 52 ~ listCollection ~ error', error);
    return { success: false };
  }
}