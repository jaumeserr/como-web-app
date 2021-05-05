import firebase from "firebase/app";
import "firebase/firestore";

let db;
function getDb() {
  if (!db) {
    db = firebase.firestore();
  }
  return db;
}

const formatResponse = (success, data) => {
  return { success, data }
}

export async function createObjectWithId(collection, object, id) {
  try {
    const db = getDb();
    await db.collection(collection).doc(id).set(object);
    return formatResponse(true);
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 18 ~ createObjectWithId ~ error", error)
    return formatResponse(false);
  }
}

export async function createObject(collection, object) {
  try {
    const db = getDb();
    const docRef = await db.collection(collection).add(object);
    return formatResponse(true, docRef.id);
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 29 ~ createObject ~ error", error)
    return formatResponse(false);
  }
}

export async function getObjectById(collection, id) {
  try {
    const db = getDb();
    const doc = await db.collection(collection).doc(id).get();
    if (doc.exists) {
      const data = doc.data();
      return formatResponse(true, { ...data, id: doc.id });
    }
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 43 ~ getObjectById ~ error", error)
    return formatResponse(false);
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
    return formatResponse(true, data);
  } catch(error) {
    console.log("🚀 ~ file: db.js ~ line 59 ~ listCollection ~ error", error)
    return formatResponse(false);
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
    return formatResponse(true, data);
  } catch(error) {
    console.log("🚀 ~ file: db.js ~ line 59 ~ listCollection ~ error", error)
    return formatResponse(false);
  }
}

export async function listCollection(collection, filter) {
  try {
    const db = getDb();
    let query = db.collection(collection);
    if (filter) {
      query = query.where(filter.field, filter.cond, filter.value);
    }
    const querySnapshot = await query.get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })  
    });
    return formatResponse(true, data);

  } catch(error) {
    console.log('IMTCHLG ~ file: db.js ~ line 52 ~ listCollection ~ error', error);
    return formatResponse(false);
  }
}

export async function filterProductsByOrder(collection, field, order) {
  try {
    const db = getDb();
    const querySnapshot = await db.collection(collection)
    .orderBy(field, order)
    .get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })  
    });
    return formatResponse(true, data);
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 68 ~ filterByPriceAscendent ~ error", error)
  }
}

export async function listUserCart(userId) {
  try {
    const db = getDb();
    let query = await db.collection('orders')
    query = query.where('userId', '==', userId)
    const querySnapshot = await query.get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    })
    return formatResponse(true, data);
  } catch (error) {
    console.log('IMTCHLG ~ file: db.js ~ line 73 ~ listUserRooms ~ error', error);
    return formatResponse(false);
  }
}

export async function removeProductFromCard(productId) {
  try {
    const db = getDb();
    await db.collection('orders').doc(productId).delete();
    return formatResponse(true);
  } catch(error) {
    console.log("🚀 ~ file: db.js ~ line 124 ~ removeProductFromCard ~ error", error)
  }
}

