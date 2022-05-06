require("dotenv").config();

const {
    Client,
    AccountId,
    PrivateKey,
    TokenCreateTransaction
} = require("@hashgraph/sdk");

async function main(){
    // configure our client, used to create a client connection
    const operatorKey = PrivateKey.fromString(process.env.PRIVATE_KEY);
    const operatorId = AccountId.fromString(process.env.ACCOUNT_ID);

    let client = Client.forTestnet();
    client.setOperator(operatorId, operatorKey)

    var createTokenTx = await new TokenCreateTransaction().setTokenName("example 1").setTokenSymbol("exl").setDecimals(0).setInitialSupply(100).setTreasuryAccountId(operatorId).execute(client);

    var createReceipt = await createTokenTx.getReceipt(client);
    var newToken = createReceipt.tokenId;
    console.log('new Token id: ', newTokenId);

}
main();