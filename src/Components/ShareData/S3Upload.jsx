import Axios from "axios";

const uploadFile = async () => {
    await Axios.post("https:\//01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/exam/upload",
         "",
        {
            headers: {
               Authorization: '32190d393d00fb9694ccaf49f1b79a38',
               'Content-Type': 'application/json'}})
        .then(async response =>{
            await Axios.put(response.data.upload_link, response.data.tmp_file_name)
                .then(response2 => {console.log(response2.data); return response2.data})
                .catch(error => console.error(error.response2.data, {request: error.request}));
            console.log(response.data);
            return response.data;})
        .catch(error => console.error(error.response.data, {request: error.request}));
}

export default uploadFile;