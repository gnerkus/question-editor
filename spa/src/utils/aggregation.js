export const biggest = (coll, transform) => {
  const biggest = coll.sort((first, second) => {
    const firstSize = transform(first)
    const secondSize = transform(second)

    if (secondSize > firstSize) {
      return 1
    } else if (firstSize > secondSize) {
      return -1
    } else {
      return 0
    }
  })[0]

  const result = biggest ? biggest : ''
  return result
}

export const pluck = (obj, attr) =>
  Object
    .keys(obj)
    .map(key =>
      obj[key][attr]
    )
