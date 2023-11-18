import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: "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",
});

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      // {
      //   role: "system",
      //   content: "you are kind and user friendly chatbot?",
      // },
      {
        role: "user",
        content: " hello! what is your name",
      },
    ],
    // max_tokens: 2048
  });
  console.log(response.choices[0].message.content)
}

main();
