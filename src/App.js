import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Home from "./pages/home";
import History from "./pages/history";
import SideBar from "./components/sideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./components/wrapper";
function App() {
  return (
    <>
      {/* <Row>
        <Col xs={3}><SideBar/></Col>
        <Col><Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes></Col>
      </Row>   */}
      <Wrapper>
        <SideBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      </Wrapper>
    </>
  );
}

export default App;
