export default (obj, desiredValue) => {
  const arr = Object.entries(obj).map(item => ([item[0], item[1] ? item[1] : desiredValue]))

  return Object.fromEntries(arr)
}
