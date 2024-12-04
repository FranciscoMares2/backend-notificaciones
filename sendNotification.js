import webPush from "web-push";

// Reemplaza con tus claves VAPID generadas (ve al paso siguiente para generarlas)
const publicVapidKey = "BFX60-6BG7NRB2-3vR8LqrWcs3PO4S5ZBbuXb1000nyPow6CqiH6GgPwZqfuenlPHBFcH6yaeuMAekC62KKfXrE";
const privateVapidKey = "t6_WlR6FWzBT9Xuhd_sEvkhEfQ4wVJ4D-vvefvxc6Ng";

webPush.setVapidDetails(
  "mailto:franciscomaresnorberto@gmail.com", // Cambia por tu correo
  publicVapidKey,
  privateVapidKey
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { subscription, payload } = req.body;

    try {
      await webPush.sendNotification(subscription, JSON.stringify(payload));
      res.status(200).json({ message: "Notificación enviada." });
    } catch (err) {
      console.error("Error al enviar la notificación:", err);
      res.status(500).json({ error: "Error al enviar la notificación." });
    }
  } else {
    res.status(405).json({ error: "Método no permitido." });
  }
}
