export function side(number: number) {
  const isEven = number % 2 === 0;
  return isEven ? 'right' : 'left';
}
