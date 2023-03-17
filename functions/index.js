const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.saveUserMetadata = functions.auth.user().onCreate((user) => {
  const {uid, email, displayName} = user;
  const metadataRef = admin.database().ref(`users/${uid}/metadata`);

  return metadataRef.set({
    email,
    displayName,
    createdAt: new Date().toISOString(),
  });
});
