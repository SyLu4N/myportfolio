export function side(number: number) {
  if (number === 0) return 'right';

  const isEven = number % 2 === 0;
  return isEven ? 'right' : 'left';
}
