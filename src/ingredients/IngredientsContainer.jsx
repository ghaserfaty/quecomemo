import { List, Card } from 'antd';

import {  } from "../redux/ingredientsApi";

export const IngredientsContainer = () => {
  const { data, error, isLoading } = useGetIngredientsQuery();

  return (
    <div>
      {!isLoading && (
              <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={data?.data}
              renderItem={(item, index) => (
                <List.Item key={`recipe-${index}`}>
                  <Card style={{cursor: 'pointer', fontWeight: 'bold', boxShadow: '9px 9px 5px -6px rgba(112,112,112,1)'}} >{item.title}</Card>
                </List.Item>
              )}
            />
      )}
      <Button type="primary" onClick={onAddRecipeClick}>
        Agregar Receta
      </Button>
    </div>
  );
};
