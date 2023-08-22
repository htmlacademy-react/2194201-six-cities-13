import { useState, FormEvent, ChangeEvent } from 'react';
import { FormLoginData, Status } from '../../constants';
import { UserAuth } from '../../types';
import { AUTH_FIELDS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loginAction } from '../../store/api-actions';
import { selectStatusLogin } from '../../store/user-process/selectors';
import styles from './error.module.css';

function FormLogin(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatusLogin);
  const { Email, Password } = FormLoginData;

  const [userAuth, setUserAuth] = useState<UserAuth>({
    email: {
      value: '',
      isValid: false,
      errorText: Email.TextError,
      regex: Email.RegEx,
    },
    password: {
      value: '',
      isValid: false,
      errorText: Password.TextError,
      regex: Password.RegEx,
    },
  });

  const isValidValues = userAuth.email.isValid && userAuth.password.isValid;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (isValidValues) {
      dispatch(
        loginAction({
          login: userAuth.email.value,
          password: userAuth.password.value,
        })
      );
    }
  };

  const onInputsChange = (
    name: (typeof AUTH_FIELDS)[number]['name'],
    value: string
  ) => {
    const { regex } = userAuth[name];
    const isValid = !value.includes(' ') && regex.test(value);

    setUserAuth((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        isValid,
      },
    }));
  };

  return (
    <form className="login__form form" onSubmit={handleFormSubmit}>
      {AUTH_FIELDS.map(({ name, label }) => {
        const { isValid } = userAuth[name];

        return (
          <div className="login__input-wrapper form__input-wrapper" key={name}>
            <label className="visually-hidden">{label}</label>
            <input
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                onInputsChange(name, evt.target.value)
              }
              className="login__input form__input"
              type={name}
              name={name}
              placeholder={label}
              required
              value={userAuth[name].value}
            />
            {!isValid && userAuth[name].value && (
              <span className={styles['error-auth']}>
                {userAuth[name].errorText}
              </span>
            )}
          </div>
        );
      })}
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!isValidValues || status === Status.Loading}
      >
        {status === Status.Loading ? 'Waiting...' : 'Sign in'}
      </button>
    </form>
  );
}

export default FormLogin;
