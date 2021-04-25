import firebase from "firebase/app";
import "firebase/auth";

export function signup(email, password) {
  try {
    const result = firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log("🚀 ~ file: auth.js ~ line 7 ~ signup ~ result", result)
    return { success: true, data: result.user.id };
  } catch (error) {
    console.log("🚀 ~ file: auth.js ~ line 10 ~ signup ~ error", error)
    return { success: false };
  }
} 

export async function login(email, password) {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("🚀 ~ file: auth.js ~ line 18 ~ login ~ result", result)
    return true;
  } catch (error) {
    console.log("🚀 ~ file: auth.js ~ line 21 ~ login ~ error", error)
    return false;
  }
}

export function registerAuthObserver(callback) {
  firebase.auth().onAuthStateChanged(callback);
}

export function logout() {
  firebase.auth().signOut();
}