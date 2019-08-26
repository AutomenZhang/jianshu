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
            <Header />
            <GlobalStyle/>
            <IconFont/>
            <BrowserRouter>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={Detail}></Route>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
