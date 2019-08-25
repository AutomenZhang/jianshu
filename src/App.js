import React from 'react';
import {GlobalStyle} from './style.js'
import {IconFont} from './static/iconfont/iconfont'
import Header from './common/head'
import {Provider} from 'react-redux'
import store from "./store";

function App() {
  return (
    <div>
        <Provider store={store}>
            <Header />
            <GlobalStyle/>
            <IconFont/>
        </Provider>
    </div>
  );
}

export default App;
