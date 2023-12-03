const ErrorModal = ({ info }: { info?: string }) => {
  return <div>{info ? "" : "An Error Occured. Kindly Refresh again."}</div>;
};
export default ErrorModal;
