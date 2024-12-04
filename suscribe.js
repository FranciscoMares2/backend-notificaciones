export default async function handler(req, res) {
    if (req.method === "POST") {
      const subscription = req.body;
  
      console.log("Nueva suscripción recibida:", subscription);
  
      res.status(201).json({ message: "Suscripción exitosa." });
    } else {
      res.status(405).json({ error: "Método no permitido." });
    }
  }
  