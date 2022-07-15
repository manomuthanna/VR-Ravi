module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a POST request.');

    const body = (req.body);
    const responseMessage = "This HTTP triggered POST function executed successfully.\n" +
        "Request body: " + body;

    context.res = {
        // status: 200, /* Defaults to 200 */ 
        body: responseMessage
    };
}
