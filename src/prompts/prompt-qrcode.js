import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de Qr Code (1- NORMAL ou (2- TERMINAl"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Digite apenas entre 1 e 2"),
    required: true,
  },
];

export default promptQRCode;
