const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
main().catch((err) => console.log(err));

async function main() {
     await mongoose.connect('mongodb+srv://piercesebrena:tvIlNTBz4a7zoPsF@cluster1.ru1ysof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
    
     console.log("MongoDB is connected")
}

