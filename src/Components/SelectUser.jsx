import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import { Stack, Avatar, Button, Image } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Switch from "@mui/material/Switch";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import photo from "../assets/test.jpg";

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

    axios
        .post(
        "https://01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/user/get"
        )
        .then(function (response) {
            setUsers({
                value: response.data.user,
                loading: false,
        });
        console.log(response.data.user);
        });
  return (
    <div>
      <Stack 
        spacing={4}
        className="wrap"
      >
        <h2> Select user </h2>
        <Stack
          component="span"
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={2}
          sx={{}}
        >
          {!users.loading
            ? users.value.map((d, i) => (
                <div className="">
                  {" "}
                  <Button 
                    sx = {{
                        borderRadius: 50,
                    }}
                    onClick={() => onSelect(d.id)}
                  >
                    <img src={d.photo_url} className="user-image" />
                  </Button>
                  <h4>{d.first_name}</h4>
                </div>
              ))
            : "loading"}
        </Stack>
      </Stack>
    </div>
  );
}
