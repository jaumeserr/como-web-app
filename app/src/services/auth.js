import firebase from "firebase/app";
import "firebase/auth";

const formatResponse = (success, data) => {
  return { success, data }
}

export async function signup(email, password) {
  try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return formatResponse(true, result.user.uid);
  } catch (error) {
    return formatResponse(false);
  }
}

export async function login(email, password) {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("🚀 ~ file: auth.js ~ line 16 ~ login ~ result", result)
    return formatResponse(true);
  } catch (error) {
    return { success: false, error };
  }
}

export function registerAuthObserver(callback) {
  firebase.auth().onAuthStateChanged(callback);
}

export function logout() {
  firebase.auth().signOut();
}