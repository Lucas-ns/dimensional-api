import mongoose from "mongoose";

// const connectDatabase = () => {
//   console.log("Waiting the connection to database");

//   mongoose
//     .connect(
//       "mongodb+srv://root:root@dimensional.hdr8jhe.mongodb.net/?retryWrites=true&w=majority&appName=dimensional",
//     )
//     .then(() => console.log("MongoDB Atlas Connected"))
//     .catch((error) => console.log(error));
// };

async function connectDatabase() {
  console.log("Waiting the connection to database");

  try {
    await mongoose.connect(
      "mongodb+srv://root:root@dimensional.hdr8jhe.mongodb.net/?retryWrites=true&w=majority&appName=dimensional",
    );
  } catch (error) {
    console.log(error);
  } finally {
    console.log("MongoDB Atlas Connected");
  }
}

export default connectDatabase;
