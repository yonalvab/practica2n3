import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
const keySecret = 'arribaBoys'
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'yoncitoyon' && password === 'yonyo1234') {
    const token = jwt.sign({ username }, keySecret, { expiresIn: '1h' });
    res.json({ token });
    console.log(token)
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

app.get('/verify', (req, res) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }
  
    jwt.verify(token, keySecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido o ha expirado' });
      }
      res.status(200).json({ message: 'Token válido' });
    });
  });
  
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});