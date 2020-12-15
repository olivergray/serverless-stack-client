const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-drog",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "nlz9lkkxcb",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_thqN3ETU1",
    APP_CLIENT_ID: "isnkg07clej79ubd1oumnnrsk",
    IDENTITY_POOL_ID: "us-east-2:bbb23692-21ea-4410-ae1f-7a97c79efa32",
  },
};

export default config;