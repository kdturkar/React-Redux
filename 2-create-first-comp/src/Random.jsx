function Random() {
  let number = Math.random() * 10;
  return <p style={{ 'background-color': 'red' }}>
    Random Number is:  {Math.round(number)}
  </p>
}
export default Random;