import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import useInput from "../hooks/userInput";
import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const [userId, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(event => {
    event.preventDefault();
    dispatch(loginAction);
  }, []);

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
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
