module.exports = {
    mongodbMemoryServerOptions: {
        instance: {
            dbName: "jest"
        },
        binary: {
            version: "4.0.3",
            skipMD5: true
        },
        autoStart: false
    },
    mongoURLEnvName: 'mongodb://127.0.0.1:59217/eed4b272-12b0-43bd-9b99-c360468f1409?/jest'
};