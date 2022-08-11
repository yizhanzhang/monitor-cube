import axios from 'axios';

async function getNet() {
  const result = await axios.get('http://127.0.0.1:3000/info');
  console.log(result.data.downloadData + '---' + result.data.uploadData);
  setTimeout(() => {
    getNet();
  }, 1000)
}

getNet();