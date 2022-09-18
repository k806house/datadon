import "./SelectUser.css";
import { React, useState, useEffect } from "react";
import { Stack, Button, Typography } from "@mui/material";

import axios from "axios";


import { useNavigate } from "react-router-dom";

export function SelectUser() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [users, usersSet] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      axios
        .post(
          "https://01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/user/get"
        )
        .then((response) => usersSet(response.data.user));
    }

    fetchUsers();
  }, []);

  const onSelect = (id) => {
    axios
      .post(
        "https://01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/user/auth",
        { user_id: id }
      )
      .then(function (response) {
        console.log(response.data.authorization_token);

        localStorage.setItem(
          "token",
          JSON.stringify(response.data.authorization_token)
        );
        navigate("/home");
      });
  };

  return (
    <div>
      <Stack spacing={10} justifyContent="space-around" alignItems="center" sx={{mt:20, mb:10}}>
        <h1 id="user1">Select your user!</h1>
        <Stack
          component="span"
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={4}
          sx={{}}
        >
          {users.map((d, i) => (
            <div key={d.id} className="">
              <Button
                sx={{
                  borderRadius: 50,
                }}
                onClick={() => onSelect(d.id)}
                onMouseEnter={() => {setName(d.first_name.toUpperCase())}}
              >
                <img src={d.photo_url} className="user-image" />
              </Button>
              {/* <Typography
                align="center"
              >
                {d.first_name}
              </Typography> */}
            </div>
          ))}
        </Stack>
        <h2 id="user2">{name}</h2>
      </Stack>
    </div>
  );
}
