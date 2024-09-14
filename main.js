import express from 'npm:express';

const app = express();

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
