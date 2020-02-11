
function Setgame() {
  let id = 0;
  const cards = ["1", "5", "6", "4", "3", "2"].reduce((accumulator, type) => {
    accumulator.push(
      ...[
        {
          id: id++,
          type
        },
        {
          id: id++,
          type
        }
      ]
    );
    return accumulator;
  }, []);

  return cards;
}

export default Setgame;
