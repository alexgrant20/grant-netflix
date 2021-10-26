import "./loadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="centerLoadingSpinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
