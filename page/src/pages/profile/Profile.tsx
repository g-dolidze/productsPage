import { useState } from "react";

import { Form, useForm } from "react-hook-form";

function Profile() {
  const { userData } = useForm<UserItem>();

  const userInfo = async () => {
    const { data } = await getUserInfo();
    return console.log(data);
  };
  userInfo();
  return (
    <div>
      <Form
        action="localhost:8080"
        method="post"
        onSubmit={() => {}}
        onSuccess={() => {}}
        onError={() => []}
        validateStatus={(status) => status >= 200}
      >
        <label htmlFor="firstName">firstName</label>
        <input type="text" id="firstName" {...userData("firstName")} />

        <label htmlFor="lastName">lastName</label>
        <input type="text" id="lastName" {...userData("lastName")} />

        <label htmlFor="email">email</label>
        <input type="text" id="email" {...userData("email")} />

        <button> submit</button>
      </Form>
    </div>
  );
}

export default Profile;
