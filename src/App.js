import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
//导入首页和城市选择页面
import Home from './pages/Home'
import CityList from './pages/CityList'

//导入要使用的组件
import {Button} from 'antd-mobile'
function App() {
  return (
    <Router>
    <div className="App">
     
      
     
      {/* 配置路由 */}
     <Route path="/home" component={Home}></Route>
     <Route path="/citylist" component={CityList}></Route>
     {/* <Button type="primary">按钮</Button> */}
    </div>
    </Router>
  );
}

export default App;
