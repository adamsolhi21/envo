
var admin = require("firebase-admin");

var serviceAccount = require("C:\Users\AdamTravers\OneDrive - Lovehoney Group\Desktop\Dev\envo\envo-377917-firebase-adminsdk-ohqrz-f0975a7409.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://envo-377917-default-rtdb.europe-west1.firebasedatabase.app"
});
const db = admin.firestore();
exports.storeFormDetails = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;
    db.collection("formDetails").add({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding doc: ", error);
        });
}
