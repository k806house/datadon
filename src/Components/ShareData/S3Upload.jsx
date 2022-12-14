import Axios from "axios";

const uploadFile = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    var tmpFilename = "";
    await Axios.post("https:\//01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/exam/upload",
        "",
        {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            tmpFilename = response.data.tmp_file_name;
            await Axios.put(response.data.upload_link, response.data.tmp_file_name)
                .then(response2 => { 
                    console.log(response2.data); 
                    return response2.data })
                .catch(error => console.error(error.response2.data, { request: error.request }));
            console.log(response.data);
            return response.data;
        })
        .catch(error => console.error(error.response.data, { request: error.request }));
    return tmpFilename;
}

export default uploadFile;