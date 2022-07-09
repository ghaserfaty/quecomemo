import {useGetRecipesQuery, useAddRecipeMutation} from '../../redux/recipesApi'
import RecipesList from '../RecipesList/RecipesList';
import { Modal, Button } from 'antd';
import { useState } from 'react';
import AddRecipeModal from '../Modals/AddRecipeModal';

const RecipesContainer = () => {
    const [isIngredientsModalVisible, setIsIngredientsModalVisible] = useState(false);
    const [isAddRecipeModalVisible, setIsAddRecipeModalVisible] = useState(false);

    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    const showIngredientsModal = () => {
        setIsIngredientsModalVisible(true);
    };
  
    const handleOkIngredientsModal = () => {
        setIsIngredientsModalVisible(false);
    };
  
    const handleCancelIngredientsModal = () => {
        setIsIngredientsModalVisible(false);
    };
    
    const { data, error, isLoading } = useGetRecipesQuery();
    const onRecipeClick = (item) => () =>{

        console.log(item.title)
        setSelectedRecipe(item)
        showIngredientsModal()
      };
      const onAddRecipeClick = () =>{
        setIsAddRecipeModalVisible(true)
      };
    return (
        <>
            <div>
                {!isLoading && <RecipesList data={data?.data} onRecipeClick={onRecipeClick}/>}
                <Button type="primary" onClick={onAddRecipeClick}>
                Agregar Receta
                </Button>
            </div>
            <Modal title={selectedRecipe?.title} visible={isIngredientsModalVisible} onOk={handleOkIngredientsModal} onCancel={handleCancelIngredientsModal}>
                {selectedRecipe?.ingredients.map((ing,index) => <p key={`ing-${index}`}>{ing}</p>)}
            </Modal>
            <AddRecipeModal isModalVisible={isAddRecipeModalVisible} setIsAddRecipeModalVisible={setIsAddRecipeModalVisible}/>
        </>
        
    )
}

export default RecipesContainer
