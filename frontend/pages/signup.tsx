import { Button, Checkbox, Form, Input } from "antd";
import Head from "next/head";
import { useState } from "react";
import AppLayout from "../components/AppLayout";

const Signup = () => {
  const [id, setId] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [term, setTerm] = useState("");

  const onSubmit = () => {};
  const onChangeId = event => {
    const {
      target: { value }
    } = event;
    setId(value);
  };
  const onChangeNickName = event => {
    const {
      target: { value }
    } = event;
    setNickName(value);
  };
  const onChangePassword = event => {
    const {
      target: { value }
    } = event;
    setPassword(value);
  };
  const onChangePasswordConfirm = event => {
    const {
      target: { value }
    } = event;
    setPasswordConfirm(value);
  };
  const onChangeTerm = event => {
    const {
      target: { value }
    } = event;
    setTerm(value);
  };

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
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
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
              Agree
            </Checkbox>
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
