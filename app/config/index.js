const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {
    dev: {
        SECRET_KEY:"asdfghjkl",
        db:{
            url: "mongodb+srv://Netflix-adm:12345abcd@netflix-96oer.mongodb.net/test?retryWrites=true"
        }
    },
    test:{
        SECRET_KEY:"asdfghjkl",
        db:{
            url: "mongodb+srv://admin:12345abcd@cluster0-znhhq.gcp.mongodb.net/test?retryWrites=true" 
        }
    },
    production:{
        SECRET_KEY: process.env.SECRET_KEY,
        db:{
            url: process.env.MONGO_URL 
        }
    }
};

module.exports = ENVS[NODE_ENV];