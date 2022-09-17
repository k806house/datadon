import { React, useState, useEffect} from "react";
import { Stack } from "@mui/material";

import axios from "axios";

import "./SelectUser.css";

import { useNavigate } from "react-router-dom";

export function SelectUser() {
    const navigate = useNavigate();

    const onSelect = (id) => {
        axios
        .post(
            "https://01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/user/auth", 
            {user_id: id}
        )
        .then(function (response) {
            console.log(response.data.authorization_token)

            localStorage.setItem('token', JSON.stringify(response.data.authorization_token));
            navigate("/home");
        });
      };

    const [users, setUsers] = useState({
        value: "",
        loading: true,
    });
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
              <Button 
                    sx = {{
                        borderRadius: 50,
                    }}
                    onClick={() => onSelect(d.id)}
                  >
                    <img src={d.photo_url} className="user-image" />
                </Button>
            </div>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
