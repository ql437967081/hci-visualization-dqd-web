const handleFailure = error => {
    console.log(error);
};

const handleResponse = (response, handleSuccess) => {
    console.log(response);
    handleSuccess(response.data);
};

export { handleFailure, handleResponse };
