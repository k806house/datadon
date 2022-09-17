import { React, useState, useEffect} from "react";
import { Stack } from "@mui/material";

import axios from "axios";

import "./SelectUser.css";

export function SelectUser() {
  const [users, usersSet] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
        axios
        .post("https://01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/user/get")
        .then((response) => usersSet(response.data.user));
      }

    fetchUsers();
  }, []);

  return (
    <div>
      <Stack spacing={4} className="wrap">
        <h2> Select user </h2>
        <Stack
          component="span"
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={2}
          sx={{}}
        >
          {users.map((d, i) => (
            <div key={d.id} className="">
              <a href="/find-data">
                <img src={d.photo_url} className="user-image" />
              </a>
              <h4>{d.name}</h4>
            </div>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
