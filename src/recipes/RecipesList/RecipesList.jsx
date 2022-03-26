
import { List, Card  } from 'antd';



const RecipesList = ({data, onRecipeClick}) => {


    return (
        <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card style={{cursor: 'pointer', fontWeight: 'bold', boxShadow: '9px 9px 5px -6px rgba(112,112,112,1)'}} onClick={onRecipeClick(item)}>{item.title}</Card>
          </List.Item>
        )}
      />
        
    )
}

export default RecipesList
