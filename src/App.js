import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import "../src/assets/css/global.scss";
// import "./assets/js/common";
import "animate.css";
import Home from "./pages/home";
import OverView from "./pages/overview";
import Application from "./pages/application";
import DeveFile from "./pages/devefile";
import FileDetail from "./pages/devefile/detail";
import Lndustry from "./pages/industry";
import InduDeatail from "./pages/industry/detail";
import Ecology from "./pages/ecology";
import FourAssis from "./pages/fourassis";
import CityPlan from "./pages/cityplan";
import Consultation from "./pages/consultation";
// import JoinUs from "./pages/joinus";
import Price from "./pages/price";
import Ability from "./pages/ability";
import Login from "./pages/wxInfo/loginInfo";
import testSMS from './components/updateUser/testSMS';
// import MnInfo from "./components/updateUser/loginMnInfo";
import Scan from "./pages/login/scan";
import Jump from "./components/updateUser/Jump";
import Avatar from "./components/updateUser/Upload";
import Admin from "./pages/admin";
import Asstetation from "./pages/asstetation/asstetation";
import { IEVersion } from './assets/libs/util';
IEVersion();
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/overView" component={OverView} />
          <Route path="/ability/:id" component={Ability} />
          <Route exact path="/application" component={Application} />
          <Route path="/application/:id" component={Application} />
          <Route path="/industry" component={Lndustry}></Route>
          <Route path="/detail" component={InduDeatail} />
          <Route path="/deveFile" component={DeveFile} />
          <Route path="/fileDetail/:id" component={FileDetail} />
          <Route path="/ecology" component={Ecology} />
          <Route path="/fourassis" component={FourAssis} />
          <Route path="/ctiyPlan" component={CityPlan} />
          <Route path="/consultation" component={Consultation} />
          <Route path="/testSMS" component={testSMS} />
          {/* <Route path="/contact" component={JoinUs} /> */}
          <Route path="/price" component={Price} />
          <Route path="/info" component={() => <Login qrCodeLogin />} />
          {/* <Route path="/mnInfo" component={() => <MnInfo qrCodeLogin />} /> */}
          <Route path="/login" component={() => <Scan />} />
          <Route path="/asstion" component={Asstetation} />
          <Route path="/admin" component={Admin} />
          <Route path="/wxcodeJump" component={Jump} />
          <Route path="/Upload" component={Avatar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
