const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./src/routes/auth');
const dashboardRoutes = require('./src/routes/dashboard');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
