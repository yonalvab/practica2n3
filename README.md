http://localhost:3000/login 
pasamos las peticiones requeridas, en este caso username y password y junto con nuestra clave de jsonwebtoken, se crea el token que expirara en 1hora

http://localhost:3000/verify
pedimos el token por el header de autorizacion y ver si es valido , sino lo es saldra un error 401