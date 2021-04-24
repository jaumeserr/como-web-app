import firebase from "firebase/app";
import "firebase/auth";

export async function login(email, password) {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}