import { useState, FormEvent, ChangeEvent } from 'react';
import {
  ERROR_TEXT_EMAIL,
  ERROR_TEXT_PASSWORD,
  REGEX_EMAIL,
  REGEX_PASSWORD,
} from '../../constants';
import { UserAuth } from '../../types';
import { AuthFields } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import './error.css';

function FormLogin(): JSX.Element {
  const dispatch = useAppDispatch();
  const [userAuth, setUserAuth] = useState<UserAuth>({
    email: {
      value: '',
      isValid: false,
      errorText: ERROR_TEXT_EMAIL,
      regex: REGEX_EMAIL,
    },
    password: {
      value: '',
      isValid: false,
      errorText: ERROR_TEXT_PASSWORD,
      regex: REGEX_PASSWORD,
    },
  });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (userAuth.email.isValid && userAuth.password.isValid) {
      dispatch(
        loginAction({
          login: userAuth.email.value,
          password: userAuth.password.value,
        })
      );
    }
  };

  const handleInputsChange = (
    name: (typeof AuthFields)[number]['name'],
    value: string
  ) => {
    const { regex } = userAuth[name];
    const isValid = regex.test(value);

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
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      {AuthFields.map(({ name, label }) => {
        const { isValid } = userAuth[name];

        return (
          <div className="login__input-wrapper form__input-wrapper" key={name}>
            <label className="visually-hidden">{label}</label>
            <input
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleInputsChange(name, evt.target.value)
              }
              className="login__input form__input"
              type={name}
              name={name}
              placeholder={label}
              required
              value={userAuth[name].value}
            />
            {!isValid && userAuth[name].value && (
              <span className="error">{userAuth[name].errorText}</span>
            )}
          </div>
        );
      })}
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!(userAuth.email.isValid && userAuth.password.isValid)}
      >
        Sign in
      </button>
    </form>
  );
}

export default FormLogin;
