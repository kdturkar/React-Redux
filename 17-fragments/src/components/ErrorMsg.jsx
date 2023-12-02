const ErrorMsg = (props) => {
  let { items } = props;

  return <>{items.length === 0 && <h6>Err Msg Comp..</h6>}</>;
};
export default ErrorMsg;
