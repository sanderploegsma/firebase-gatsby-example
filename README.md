# Gatsby on Firebase
This is an example Gatsby.js site running on Google Cloud Firebase. It features:

- A static site runnin on Firebase Hosting
- A serverless back-end for dynamic content running on Firebase Cloud Functions

## Deploying
Run `yarn` to install dependencies, and deploy to Firebase:

    yarn firebase deploy --project <your-project-id>

## Local development
Because of a [known issue](https://github.com/firebase/firebase-tools/issues/552) with the Cloud Functions emulator, you have to install dependencies with `yarn --ignore-engines` to install dependencies if you want to use the local firebase server.

Afterwards, you can start the server:

    yarn firebase serve --project <your-project-id>