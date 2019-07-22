import { Button, Checkbox, Form, Input } from "antd";
import { useCallback, useState } from "react";
import useInput from "../hooks/userInput";

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [nickName, onChangeNickName] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [term, setTerm] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [termError, setTermError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordConfirm = useCallback(
    event => {
      const {
        target: { value: inputValue }
      } = event;

      setPasswordError(inputValue !== password);
      setPasswordConfirm(inputValue);
    },
    [password]
  );

  const onChangeTerm = useCallback(event => {
    const {
      target: { checked }
    } = event;
    setTermError(false);
    setTerm(checked);
  }, []);

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      if (password !== passwordConfirm) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
    },
    [password, passwordConfirm, term]
  );

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 20 }}>
        <div>
          <label htmlFor="user-id">ID</label>
          <Input
            type="text"
            value={id}
            name="user-id"
            onChange={onChangeId}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="user-nickname">Nick Name</label>
          <Input
            type="text"
            value={nickName}
            name="user-nickname"
            onChange={onChangeNickName}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <Input
            type="password"
            value={password}
            name="user-password"
            onChange={onChangePassword}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="user-password-confirm">Password Confirm</label>
          <Input
            type="password"
            value={passwordConfirm}
            name="user-password-confirm"
            onChange={onChangePasswordConfirm}
            required={true}
          />
          {passwordError && (
            <div style={{ color: "red" }}>Password Does Not Match</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            Agree
          </Checkbox>
          {termError && <div style={{ color: "red" }}>You Need Agree.</div>}
        </div>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
