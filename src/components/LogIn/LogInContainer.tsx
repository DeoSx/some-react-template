import React, { useEffect, useState } from 'react';

// utils
import { useDispatch, useSelector } from 'react-redux';
import { setSignInActionData, setSignUpActionData } from '../../_actions/user.actions';

// components
import LogIn from './LogIn';
// import Toast from '../ui-kit/Toast';

// types
import { LogInData } from './types';
import { RootState } from '../../_reducers';

// styles
import { Notify, Container } from './styles';

const LogInContainer = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(({ user }: RootState) => user);

  const [state, setState] = useState({
    isError: false,
  });

  const onSave = ({ signIn, ...authData }: LogInData) => {
    if (signIn) {
      dispatch(setSignInActionData(authData));
      return;
    }
    dispatch(setSignUpActionData(authData));
  };

  useEffect(() => {
    setState((prev) => ({ ...prev, isError: !!error }));
  }, [error]);

  return (
    <Container>
      <LogIn onSave={onSave} />
      <Notify
        size="small"
        iconType="alertTriangle"
        mode="error"
        text={error}
        visible={state.isError}
        autoHideDelay={2000}
        onClose={() => setState((prev) => ({ ...prev, isError: false }))}
      />
    </Container>
  );
};

export default LogInContainer;
