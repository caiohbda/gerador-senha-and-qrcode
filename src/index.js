import prompt from "prompt";
import createPassowrd from "./services/password/create.js";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassowrd();
  });

  prompt.start();
}

main();
