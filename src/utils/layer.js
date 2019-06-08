// function shuffle(array) {
//   const _array = array.slice(0)
//   for (var i = _array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1))
//     var temp = _array[i]
//     _array[i] = _array[j]
//     _array[j] = temp
//   }

//   return _array
// }

 function Setgame() {
  let id = 0
  const cards = ['1', '5', '6', '4','3','2'
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

  return(cards)
}

export default Setgame;