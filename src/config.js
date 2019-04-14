export default {
    MONGO_HOST: process.env.NODE_ENV === 'production'
        ? 'mongodb+srv://Shperung:19871989_yanot@significance-canto-vwnqo.mongodb.net/significanceCantoDB?retryWrites=true'
        : 'mongodb://localhost:27017/significanceCantoDB',
    URL: process.env.NODE_ENV === 'production'
        ? 'https://significance-canto.herokuapp.com/'
        : 'http://localhost'

};
