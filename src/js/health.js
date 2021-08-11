export default function health(data) {
  const f = (a, b) => {
    let result = 0;
    if (a.health < b.health) result = 1;
    if (a.health === b.health) result = 0;
    if (a.health > b.health) result = -1;
    return result;
  };
  data.sort(f);

  return data;
}
