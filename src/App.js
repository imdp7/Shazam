import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Browse from './Components/Browse';
import Song from './Components/Song';
import PageNotFound from './Components/PageNotFound';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },

  {
    exact: true,
    path:'/Browse',
    component: Browse,
  },
  {
    path:'/track/:key',
    component: Song,
  },
  {
    component: PageNotFound,
  }
];

function App() {
  return (
    <Router>
    <div>
    <div class="sticky top-0 z-50">
     <Header/>
    </div>
     <div>
    
     <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
           ))}
          
         <Main/>
       </Switch>
     </div>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
