import React from 'react';
import {GlobalStyle} from './style.js'
import {IconFont} from './static/iconfont/iconfont'
import Header from './common/head'

function App() {
  return (
    <div>
        <Header />
        <GlobalStyle/>
        <IconFont/>
    </div>
  );
}

export default App;
