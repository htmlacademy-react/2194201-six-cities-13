import preloader from './preloader.module.css';

function Loading(): JSX.Element {
  return (
    <div className={preloader.preloader}>
      <div className={preloader.preloader__row}></div>
    </div>
  );
}

export default Loading;
