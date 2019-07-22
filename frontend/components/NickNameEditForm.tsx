import { Button, Form, Input } from "antd";

const NicknameEditForm = () => {
  return (
    <Form
      style={{
        border: "1px solid #d9d9d9",
        marginBottom: "20px",
        padding: "20px"
      }}
    >
      <Input addonBefore="NickName" />
      <Button type="primary">Edit</Button>
    </Form>
  );
};

export default NicknameEditForm;
