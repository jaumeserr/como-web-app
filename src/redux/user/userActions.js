export const setUser = (user) => {
  return { type: 'SET_USER', payload: user }
}

export const clearUser = (user) => {
  return { type: 'SET_USER', payload: null }
}