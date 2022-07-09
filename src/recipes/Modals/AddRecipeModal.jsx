import { useAddRecipeMutation } from "../../redux/recipesApi";
import { Modal, Button, Input, Form, Select } from "antd";

const AddRecipeModal = ({ isModalVisible, setIsAddRecipeModalVisible }) => {
  const [addRecipe, result] = useAddRecipeMutation();
  const [form] = Form.useForm();

  const handleOk = () => {
    setIsAddRecipeModalVisible(false);
    form.submit();
  };
  const handleCancel = () => {
    setIsAddRecipeModalVisible(false);
  };
  const onFinish = (values) => {
    const name = form.getFieldValue("name")
    const ingredients = form.getFieldValue("ingredients")
    const body = {
      name,
      ingredients
    }
    console.log("Success:",body );
   // addRecipe()
  };
  const onFinishFailed = (values) => {
    console.log("Error:", values);
  };

  const ingredients = [{id:1,name:'arroz'},{id:2,name:'pionono'},{id:3,name:'albahaca'}]

  return (
    <Modal
      title="Nueva receta"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="addRecipe"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            {
              required: true,
              message: "Por favor agregá el nombre de la receta",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Ingredientes" name="ingredients">
          <Select
            mode="multiple"
            optionLabelProp="children"
            filterOption={(inputValue, option) =>
              option.props.children
                .toString()
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            }
          >
            {ingredients.map((ing) => {
              return (<Select.Option  key={`${ing.id}-item`} label={ing.name} value={ing.id}>{ing.name}</Select.Option>)
            })}
            
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddRecipeModal;
