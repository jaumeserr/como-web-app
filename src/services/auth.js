import firebase from "firebase/app";
import "firebase/auth";

export async function signup(email, password) {
  try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return { success: true, data: result.user.uid };
  } catch (error) {
    return { success: false };
  }
}

export async function login(email, password) {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    return false;
  }
}

export function registerAuthObserver(callback) {
  firebase.auth().onAuthStateChanged(callback);
}

export function logout() {
  firebase.auth().signOut();
}