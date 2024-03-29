const {default: mongoose} = require("mongoose");

let isConnected = false; //track the connection status

export const connectToDb = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};
