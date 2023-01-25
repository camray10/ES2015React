//Chooses a random item.
function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

//Returns a copy of the array with the firt item being removed
function remove(item, items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
}

export { choice, remove };