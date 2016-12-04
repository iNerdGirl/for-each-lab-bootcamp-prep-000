function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback){
  const albums = ["Downward Spiral", "Head like a hole", "Only"]

  albums.forEach(callback)

  return albums
}

function doToArray(array, callback) {
  array.forEach(callback)
}
