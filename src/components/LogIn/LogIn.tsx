import React, { FC, useState } from 'react';

// utils
import { useFormik } from 'formik';
import * as Yup from 'yup';

// components
import Input from '../ui-kit/Input';
import Button from '../ui-kit/Button';
import FormControl from '../ui-kit/FormControl';

// types
import { LogInData, LogInProps } from './types';

// styles
import {
  Content,
  Desc,
  Form,
  FormContainer,
  Overlay,
  OverlayContainer,
  OverlayPanel,
  StyledButton,
  Title,
} from './styles';

const validationSchema: Yup.SchemaOf<LogInData> = Yup.object().shape({
  login: Yup.string().required('Введите логин!'),
  fio: Yup.string(),
  password: Yup.string().required('Введите пароль!'),
  signIn: Yup.boolean(),
});

const initialValues: LogInData = {
  login: '',
  fio: '',
  password: '',
  signIn: true,
};

const LogIn: FC<LogInProps> = ({ className, onSave = () => {} }) => {
  const [isActive, setIsActive] = useState(false);

  const { errors, touched, values, setFieldValue, handleSubmit } = useFormik<LogInData>({
    initialValues,
    onSubmit: onSave,
    validationSchema,
  });

  return (
    <Content className={className}>
      <FormContainer active={isActive} mode="signUp">
        <Form onSubmit={handleSubmit}>
          <Title>Создать аккаунт</Title>
          <FormControl isRequired error={touched.login && errors.login}>
            <Input
              placeholder="Введите ваш логин"
              type="text"
              icon="userTie"
              value={values.login}
              onChange={(value) => setFieldValue('login', value)}
            />
          </FormControl>

          <FormControl isRequired error={touched.fio && errors.fio}>
            <Input
              placeholder="Введите ваше ФИО"
              type="text"
              icon="userTie"
              value={values.fio}
              onChange={(value) => setFieldValue('fio', value)}
            />
          </FormControl>

          <FormControl isRequired error={touched.password && errors.password}>
            <Input
              placeholder="Введите ваш пароль"
              type="password"
              icon="password"
              value={values.password}
              onChange={(value) => setFieldValue('password', value)}
            />
          </FormControl>
          <StyledButton type="submit">Регистрация</StyledButton>
        </Form>
      </FormContainer>

      <FormContainer active={isActive} mode="signIn">
        <Form onSubmit={handleSubmit}>
          <Title>Вход</Title>
          <FormControl isRequired error={touched.login && errors.login}>
            <Input
              placeholder="Введите ваш логин"
              type="text"
              icon="userTie"
              value={values.login}
              onChange={(value) => setFieldValue('login', value)}
            />
          </FormControl>
          <FormControl isRequired error={touched.password && errors.password}>
            <Input
              placeholder="Введите ваш пароль"
              type="password"
              icon="password"
              value={values.password}
              onChange={(value) => setFieldValue('password', value)}
            />
          </FormControl>
          <StyledButton type="submit">Войти</StyledButton>
        </Form>
      </FormContainer>

      <OverlayContainer active={isActive}>
        <Overlay active={isActive}>
          <OverlayPanel overlay="left" active={isActive}>
            <Title>Добро пожаловать!</Title>
            <Desc>Если у Вас уже есть логин нажмите кнопку ниже</Desc>
            <Button
              type="button"
              onClick={() => {
                setIsActive(false);
                setFieldValue('signIn', true);
              }}
            >
              Войти
            </Button>
          </OverlayPanel>

          <OverlayPanel overlay="right" active={isActive}>
            <Title>Добро пожаловать!</Title>
            <Desc>Если у Вас нет аккаунта, пройдите регистрацию</Desc>
            <Button
              type="button"
              onClick={() => {
                setIsActive(true);
                setFieldValue('signIn', false);
              }}
            >
              Регистрация
            </Button>
          </OverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Content>
  );
};

export default LogIn;
