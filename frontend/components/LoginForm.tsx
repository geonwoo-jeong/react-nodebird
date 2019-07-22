import { Button, Form, Input } from "antd";
import Link from "next/link";
import useInput from "../hooks/userInput";

const LoginForm = () => {
  const [userId, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  return (
    <Form>
      <div>
        <label htmlFor="user-id" />
        <Input
          name="user-id"
          value={userId}
          onChange={onChangeId}
          required={true}
        />
      </div>
      <div>
        <label htmlFor="user-password" />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required={true}
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          Sign In
        </Button>
        <Link href="/signup">
          <a>
            <Button>Sign Up</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
