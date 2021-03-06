
//**********PORT**********//
process.env.PORT = process.env.PORT || 8080;

//**********ENVIRONMENT**********//
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//**********DATABASE**********//
// let mongoURI;
// if (process.env.NODE_ENV === 'dev') {
//   mongoURI = 'mongodb://localhost:27017/cafe';
// } else {
//   mongoURI = process.env.MONGOATL_URI;
// }
// process.env.MONGO_URI = mongoURI;
process.env.MONGO_URI = process.env.MONGOATL_URI || 'mongodb://localhost:27017/cafe'

//**********JWT EXPIRATION DATE**********//
process.env.TOKEN_EXP = '2 days';

//**********AUTHENTICATION SEED**********//
process.env.SEED = process.env.SEED || 'secret-development-seed';

//**********GOOGLE CLIENT ID**********//
process.env.CLIENT_ID = process.env.CLIENT_ID || '711487753754-skioqem7t6mbmnvinfa5k9ndb0e04um9.apps.googleusercontent.com'