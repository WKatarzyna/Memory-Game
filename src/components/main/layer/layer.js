function shuffle(array) {
  const _array = array.slice(0)
  for (var i = _array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = _array[i]
    _array[i] = _array[j]
    _array[j] = temp
  }

  return _array
}

 function setLayer() {
  let id = 0
  const cards = ['1', '2', '3', '4','5','6','7','8'
  ].reduce((acc, type) => {
    acc.push(...[{
      id: id++,
      type
    }, {
      id: id++,
      type
    }])
    return acc
  }, [])

  return shuffle(cards)
}

export default setLayer;