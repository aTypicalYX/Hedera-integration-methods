require("dotenv").config();


async function main(){
  const { session } = await ApiSession.default();
  const helloWorldContract = await Contract.newFrom({
    path: ".\hello_world.sol",
  });
  const liveContract = await session.upload(helloWorldContract);
  
  console.log(await liveContract.greet());
}

main();