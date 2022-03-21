export function price(originalPrice, discount) {
    return parseInt(originalPrice) - parseInt((originalPrice * discount) / 100);
  }