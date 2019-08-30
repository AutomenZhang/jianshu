import React from 'react';
import {GlobalStyle} from './style.js'
import {IconFont} from './static/iconfont/iconfont'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './common/head'
import Home from './pages/home'
import Detail from './pages/detail'
import {Provider} from 'react-redux'
import store from "./store";

function App() {
  return (
    <div>
        <Provider store={store}>
            <GlobalStyle/>
            <IconFont/>
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={Home} />
                <Route path='/detail/:id' exact component={Detail} />
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
