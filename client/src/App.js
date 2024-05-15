
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/index';
import Defalutcompoment from './compoment/Defaultcompoment/Defalutcompoment';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <div className="">
      <Router>
        <Routes>
          {routes.map((route) => {
          const Page = route.page;
          const Layout = route.isShowHeader ? Defalutcompoment : Fragment
         return(          
            <Route path={route.path} element={
               <Layout>
                  <Page/>
               </Layout>
            } />
         )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
