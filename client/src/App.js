import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routes/index';
import Defalutcompoment from './compoment/Defaultcompoment/Defalutcompoment';
import SideBaradmin_user from './compoment/Sidebaradmin_user/Sidebaradmin_user';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          const Layout = route.isShowHeader ? Defalutcompoment : Fragment;
          const Layoutleftadmin_user = route.isShowleftadminuser ? SideBaradmin_user : Fragment;

          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  {route.isShowleftadminuser ? (
                    <div style={{backgroundColor:'#F5F7F9'}}>
                    <div style={{ display: 'flex',width:'75%',margin:'auto' }}>
                      <Layoutleftadmin_user/>
                        <Page />
                    </div>
                    </div>
                  ) : (
                    <Page />
                  )}
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
