const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect("mongodb+srv://ashnajacob986:oYWcPpAWjhCmhApZ@cluster0.wkw8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log(" Connected to MongoDB"))
  .catch(err => console.error(" Database connection error:", err));
// Import routes
const itemRoutes = require("./routes/itemtodoRoutes");
app.use("/iteminserting", itemRoutes);
// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});