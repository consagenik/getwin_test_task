import { useState } from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import 'antd/dist/reset.css';

import { useAppDispatch } from './state/hooks';
import Login from './pages/login/Login';


function App() {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const { loggedIn } = useAppSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <Route element={<Layout isLoading={isLoading} />}>
          {!isLoading && loggedIn && (
            <>
              <Route
                path="/"
                element={<Navigate to="/profile" />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/analytic" element={<Analytic />} />
            </>
          )}

          {!isLoading && !loggedIn && (
            <>
              <Route
                path="/"
                element={<Navigate to="/auth/login" />}
              />
              <Route path="/auth/registration" element={<Registration />} />
              <Route path="/auth/login" element={<Login />} />
            </>
          )}
        </Route> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;