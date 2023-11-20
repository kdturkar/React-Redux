let CurrentTime = () => {
  let time = new Date();
  return (
    <div>
      <p>Current Date & Time:  {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
    </div>
  );
}
export default CurrentTime; 