const admin = require("firebase-admin");
const firebaseCertConfig = {
  type:"service_account",
  project_id: "bragify-7cecc",
  private_key_id: "37fb4f261cf1f86391084e6e8398a7b74e9b596b",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDnqRFCqewo5ho1\nFRq+OyJ7JUwSEAww1v9sLBh1r1I3fjYpjLwgXOI8IXSZuuXqvbHCObgIdxjdzDjI\nSMl0I5W2kXaOhfQIEhW4mCy5+1GfIMDb9Vhiqv1a3D2XzPNQPPg9DtsYiYEoF4rt\n5w4Ed2r4CxVcaMuMOTTNsD9ysnoYgqaMhNAiL1prciYNHEQBdgxZY6pwBObaqscO\n0Fi6Ola24Ru3V8KofKG8AVS0UiH5Fv3IH9Sstzh0jimSuq7MFEpFJBk7vZyeoqgs\nVGbah/H7nSMdrUfyfRkWxaAPsJ/qEqC0Tcp2E5CTnCqZJh8fCQuhJ0nK+Zb0Aku1\nakmf1AgnAgMBAAECggEAKmSVBQcFcYKSPy6Kg09dAv4TSqbnJDTj7w6utzKLMB6H\nmNjpQF7fA7P3m35JPsjR88IOPHZW9Ze+uGAhhYBRkGRUNsaqnqN4mBw46xvjluQu\nhtICB6RU0sDFALd/uyo9HydNztKy8PxF7z0+InEcASI+GXgP76w0ToO3SK0CjONa\np79vrnN9zfkU3foB2xin3Yz1SfWNXgXsWprh1Em6UdpQlwos25V+EHwu53Ttv5VD\nEKckZPUuP8JdylZ2j1RfPWJaalXwMkUk7YIcvSQOZfPWhEORuWEpU4KbXXiUpMbx\nQxs9Ch/p23ptbnSwszIYmxT/qM6QcL4CYWPNcQoimQKBgQD0CIF4wgOMCcanzGJn\nJLQKcOb+neQ0xznW+lftTWHJ5OXYl9ifG0veFYwvmE+AVpeTNJVXO0PmypgrMwXM\n+bE/yO6ixuhN+OGHRXkKvgx9V3IdM0Fp1mWzo1LY4x2Nhn9B6nAo2l/Wo51HXVAo\n0Kne7uTbqtkP+56LyhwklmbG4wKBgQDzBT0NGEDj7kxhOKj14JxKTwO6uNCkVpwy\nmn7bVmZLYg1PsCl6/S8xMoCDknui4huh3R2Pu/+/ngltjIx0lBnw2qa6TMfu8ysV\ns+HdcKG3lNurukNwX0TefROkfE1aowYwO3qKgRswkamc90VBd5LQdRdGRu3N6shk\ndx3B45b47QKBgHFOJbdI9damj1tHtYTIcOPMKiSccOHkgsGDOSIQZNAV/HZFgqnV\nRbOW86EBqiAflH8f0htPhCZ7eI3OQeo7IQZJqCtiCWhyn1xscFgBh9EGshBGxR98\nEXqH4aacRRN6GEolrO/6/Lau/w6sj9RzlfvRlec8e05FeQbUz55ZSt0bAoGBAOo1\nvT32hutkyTXVfnjhDJ9NAWIeJe6MDiNy5BmNbi7ug7euJnwCsE2wx0yGiyNS2KCp\n0oio/fT1YU6z6tWbulh20cKwputyba6P23knyKN+Eiux6rbNCjmGv7yBk6drgFZR\nrGr5vHOVnqrJYHSUweinQFQZnawbvx+b8RDgv6qNAoGAHvH6rvyP8Cf/wWpAhW88\nmnttCwaFa3iXvmWx7JUV387pbURNIgG1JwqOMM+D1OLpPpYeXts3r3Yhe058TjbM\n+IGUvGHEZyy1RnmQAfwPa/ZfKZsdFkSsIjY/SQmQRip/ujBHbOLu2qpCry1DvZqp\nta+2g7vGKTyXd2RhP7sql0A=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-h4ti0@bragify-7cecc.iam.gserviceaccount.com",
  client_id: "112581255316310300638",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-h4ti0%40bragify-7cecc.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(firebaseCertConfig),
});

const auth = admin.auth();

function verifyIdToken(token) {
  return auth.verifyIdToken(token);
}

module.exports = {
  verifyIdToken: verifyIdToken,
  firebaseCertConfig: firebaseCertConfig
};