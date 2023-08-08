import { useAppSelector } from '../../hooks';
import { selectErrorMessage } from '../../store/app-process/selectors';
import message from './error-message.module.css';

function ErrorMessage(): JSX.Element | boolean {
  const error = useAppSelector(selectErrorMessage);

  return !!error && <div className={message.error}>{error}</div>;
}

export default ErrorMessage;
