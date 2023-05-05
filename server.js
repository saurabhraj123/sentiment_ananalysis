const { spawn } = require('child_process');
const express = require('express')
const app = express();

const text = 'This is a sample text';
const pythonScript = './sentiment.py';


app.get('/', (req, res) => {
    // res.send('Hello World');
    console.log('I am here');
    const child = spawn('python', [pythonScript, text]);
    child.stdout.on('data', (data) => {
        const result = data.toString();
        console.log(result);
        // console.log('I am here2');
        res.send(result);
    });


    child.stderr.on('data', (error) => {
        console.log(`Error: ${error}`);
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))