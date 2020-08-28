import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Siagnin from '../Signin';
import 'normalize.css';

const Main = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Siagnin} />
      </Switch>
    </>
  );
};

export default Main;
