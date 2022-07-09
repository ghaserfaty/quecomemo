import "./App.css";

import { Router, navigate } from "@reach/router";
import { Layout, Menu } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import RecipesContainer from "./recipes/RecipesContainer/RecipesContainer";
import { IngredientsContainer } from "./ingredients";
const { Header, Sider, Content } = Layout;

function App() {

  const goTo = (path) => {
    navigate(path)
  }
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: "white", fontWeight: "bold" }}>
        Quecomemo? v2
      </Header>
      <Layout>
        <Sider breakpoint="lg">
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1" icon={<UnorderedListOutlined />} onClick={() => {goTo('/')}}>
              Recetas
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />} onClick={() => {goTo('/ingredients')}}>
              Ingredientes
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: "10px" }}>
          <Router>
            <RecipesContainer path="/" />
            <IngredientsContainer path="/ingredients" />
          </Router>
        </Content>
      </Layout>
    </Layout>
    // <Router>
    //   <Main path="/" />
    // </Router>
  );
}

export default App;
