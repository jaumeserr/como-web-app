import firebase from "firebase/app";
import "firebase/firestore";

let db;
function getDb() {
  if (!db) {
    db = firebase.firestore();
  }
  return db;
}

export async function createObjectWithId(collection, object, id) {
  try {
    const db = getDb();
    await db.collection(collection).doc(id).set(object);
    return { success: true };
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 18 ~ createObjectWithId ~ error", error)
    return { success: false };
  }
}

export async function createObject(collection, object) {
  try {
    const db = getDb();
    const docRef = await db.collection(collection).add(object);
    return { success: true, data: docRef.id };
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 29 ~ createObject ~ error", error)
    return { success: false };
  }
}

export async function getObjectById(collection, id) {
  try {
    const db = getDb();
    const doc = await db.collection(collection).doc(id).get();
    if (doc.exists) {
      const data = doc.data();
      return { success: true, data: { ...data, id: doc.id } };
    }
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 43 ~ getObjectById ~ error", error)
    return { success: false };
  }
}

export async function listCollection(collection) {
  try {
    const db = getDb();
    const querySnapshot = await db.collection(collection)
    .get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })  
    });
    return { success: true, data };
  } catch(error) {
    console.log("🚀 ~ file: db.js ~ line 59 ~ listCollection ~ error", error)
    return { success: false };
  }
}


export async function getObjectsByCategory(collection, category) {
  try {
    const db = getDb();
    const querySnapshot = await db.collection(collection)
    .where("category", "==", category)
    .get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
    });
    return { success: true, data };
  } catch(error) {
    console.log("🚀 ~ file: db.js ~ line 59 ~ listCollection ~ error", error)
    return { success: false };
  }
}

export async function filterProductsByQueryAndOrder(collection, field, order) {
  try {
    const db = getDb();
    const querySnapshot = await db.collection(collection)
    .orderBy(field, order)
    .get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })  
    });
    return { success: true, data };
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 68 ~ filterByPriceAscendent ~ error", error)
  }
}

