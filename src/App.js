import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Menu, Modal, Button } from 'antd';
import {
  UnorderedListOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

import {
  increment,
  selectCount
} from './recipes/recipesSlice'
import { useState } from 'react';
import RecipesList from './recipes/RecipesList/RecipesList';
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onRecipeClick = (item) => () =>{

    console.log(item.title)
    setSelectedRecipe(item)
    showModal()
  };

  const data = [
    {
      title: 'Arroz Guillermito',
      ingredients: ['arroz', 'condimento para arroz', 'ajo', 'aceite', 'queso']
    }
  ];
  return (
    <Layout style={{height:"100vh"}}>
    <Header style={{color: 'white', fontWeight:'bold'}}>Quecomemo?</Header>
    <Layout>
      <Sider breakpoint="lg">
          <Menu theme="dark"  mode="inline">
            <Menu.Item key="1" icon={<UnorderedListOutlined />}>
              Recetas
            </Menu.Item>
          </Menu>
        </Sider>
      <Content style={{padding: '10px'}}>
       <RecipesList data={data} onRecipeClick={onRecipeClick}/>
      </Content>
    </Layout>
    <Modal title={selectedRecipe?.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {selectedRecipe?.ingredients.map(ing => <p>{ing}</p>)}
    </Modal>
  </Layout>


  );
}

export default App;
