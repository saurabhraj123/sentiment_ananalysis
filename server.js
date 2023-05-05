const { spawn } = require('child_process');
const cors = require('cors');
const express = require('express')
const app = express();

app.use(cors());

const pythonScript = './sentiment.py';

app.get('/', (req, res) => {
    const text = req.query.text;

    if (!text) return res.json({ "error": 'Invalid input.' });

    const child = spawn('python', [pythonScript, text]);
    child.stdout.on('data', (data) => {
        const result = data.toString();
        const output = { result }

        return res.json(JSON.stringify(output));
    });


    child.stderr.on('data', (error) => {
        console.log(`Error: ${error}`);
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))