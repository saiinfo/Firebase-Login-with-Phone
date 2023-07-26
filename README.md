# Project Name
Firebase Login with Phone

## Project Description
The "Firebase Login with Phone" project is a React application that demonstrates how to implement Firebase phone number authentication. Users can sign in to the app using their mobile phone numbers, and Firebase's phone authentication service securely verifies the users' phone numbers using SMS verification codes.

 ### Prerequisites
Before getting started, make sure you have the following set up:

Step 1: Set Up Firebase Project:
Go to the Firebase Console.
Go to the Firebase console (https://console.firebase.google.com/).
Enable the "Authentication" service from the left-hand side menu.
Under the "Sign-in method" tab, enable "Phone" as a sign-in provider.

Step 2: Enable Firebase Authentication:
In the Firebase console, navigate to "Authentication" from the left sidebar. Under the "Sign-in method" tab, choose the authentication methods you want to enable, such as Phone, etc. Enable the desired methods and save your changes.

Step 3: Install Firebase SDK:
To use Firebase Authentication in your application, you need to integrate the Firebase SDK into your project. Refer to the official Firebase documentation for instructions on how to install the SDK for your specific platform.

## Dependencies

    "bootstrap": "^5.1.3",
    "firebase": "^10.0.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.8.0",
    "react-dom": "^18.2.0",
    "react-google-button": "^0.7.2",
    "react-phone-number-input": "^3.3.0",
    "react-router-dom": "^6.14.2",
    "react-scripts": "5.0.1"

## Running the Project in Vs Code
a. Build the project: Open The terminal and used command 'npm start'.
b. Access the project:

   - Open a web browser.
   - Enter the URL (e.g., `http://localhost:3000/`).

c.Visit your app in the browser, and you should see the "Phone Number Login Example" heading along with the phone number input and verification code input once you enter your phone number and click "Send Verification Code." After entering the verification code and clicking "Verify Code," the user should be signed in successfully.


Successful Authentication: Once authenticated, you will be redirected back to the application and shown a welcome message with your display name and email.

## Conclusion:
With Firebase Authentication set up and integrated into your application, you can easily add user login functionality, protect specific routes or content, and personalize user experiences based on their authentication status. Always ensure you handle authentication securely, and refer to the official Firebase documentation for detailed information on additional features and best practices.

## Project Priview


