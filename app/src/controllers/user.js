import { signup } from '../services/auth';
import { createObjectWithId, getObjectById } from '../services/db';

const USER_COLLECTION = 'profiles';

export async function userSignup(userData) {
  const { name, lastname, email, password, favourites } = userData;
  const { success: signupSuccess, data } = await signup(email, password);
  
  if (signupSuccess) {
    const profileSuccess = await createObjectWithId(USER_COLLECTION, { name, lastname, email, favourites }, data);
    if (profileSuccess.success) {
      return true;
    }
  }
  return false;
}

export async function getUserProfile(userId) {
  const { success, data } = await getObjectById(USER_COLLECTION, userId)
  return success ? data : null;
}