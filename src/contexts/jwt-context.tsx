import { createContext, useEffect, useReducer } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { authApi } from '../__fake-api__/auth-api';
import type { User } from '../types/user';

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

enum ActionType {
  INITIALIZE = 'INITIALIZE',
}

type InitializeAction = {
  type: ActionType.INITIALIZE;
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type Action =
  | InitializeAction;

type Handler = (state: State, action: any) => State;

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const handlers: Record<ActionType, Handler> = {
  INITIALIZE: (state: State, action: InitializeAction): State => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
};

const reducer = (state: State, action: Action): State => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

export const AuthContext = createContext<State>({
  ...initialState,
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const user = await authApi.me();

        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: true,
            user
          }
        });
      } catch (err) {
        console.error(err);
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const AuthConsumer = AuthContext.Consumer;
