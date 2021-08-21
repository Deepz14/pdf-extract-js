const fileInput = document.getElementById('pdf-input');
const uploadBtn = document.getElementById('upload-btn');

uploadBtn.onclick = () => {
    const payload = {pdf: fileInput.files[0].name};
    
    if(payload.pdf){
        fetch('/success', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: payload,
        }).then(response => response.json())
        .then(data => {
            alert('File Uploaded Succesfully');
            location.replace('table.html');
        })
        .catch((error) => {
            alert('Something went wrong');
        });
    }
   
}