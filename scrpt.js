// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('alertForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value;

    try {
        await db.collection('phoneNumbers').add({
            phoneNumber: phoneNumber
        });
        alert('Your number has been saved for disaster alerts!');
        document.getElementById('alertForm').reset();
    } catch (error) {
        console.error('Error saving number: ', error);
        alert('There was an error saving your number. Please try again.');
    }
});
