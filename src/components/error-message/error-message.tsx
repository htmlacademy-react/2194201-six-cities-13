import { useAppSelector } from '../../hooks';
import { getErrorMessage } from '../../store/selectors/selectors';
import message from './error-message.module.css';

function ErrorMessage(): JSX.Element | boolean {
  const error = useAppSelector(getErrorMessage);

  return !!error && <div className={message.error}>{error}</div>;
}

export default ErrorMessage;
