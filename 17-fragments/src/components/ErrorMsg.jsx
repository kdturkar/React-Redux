const ErrorMsg = (props) => {
  let { items } = props;

  return <>{items.length === 0 && <h6>Your list is empty, plz add healthy foods.</h6>}</>;
};
export default ErrorMsg;
