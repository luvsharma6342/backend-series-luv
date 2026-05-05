import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("This is home route");
});

app.post('/login', (req: any, res: any) => {
    console.log("Request received");
    const data = req.body;
    res.json({data, status: 200});
})

app.get("/user/:userId/order/:orderId", (req, res) => {
  const { userId, orderId } = req.params;
// const userId = req.params.userId;

  res.send(`User: ${userId}, Order: ${orderId}`);
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
