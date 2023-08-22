import { useAppSelector } from '../../hooks/hooks';
import { selectErrorMessage } from '../../store/app-process/selectors';
import styles from './error-message.module.css';

function ErrorMessage(): JSX.Element | boolean {
  const error = useAppSelector(selectErrorMessage);

  return !!error && <div className={styles.error}>{error}</div>;
}

export default ErrorMessage;
