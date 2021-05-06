import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
import { UserContext } from './../../App';

const PrivetRoute = ({children, ...rest}) => {
  const [singInUse, setSignInUser] = useContext(UserContext)
 
    return (
        <Route
      {...rest}
      render={({ location }) =>
        singInUse.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivetRoute;