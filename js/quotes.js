const quotes = [
  {
    quote:
      "Be the change you wish to see in the world. (세상에서 보고 싶은 변화가 되어라.)",
    author: "마하트마 간디 (Mahatma Gandhi)",
  },

  {
    quote:
      "Be the change you wish to see in the world. (세상에서 보고 싶은 변화가 되어라.)",
    author: "마하트마 간디 (Mahatma Gandhi)",
  },

  {
    quote:
      "Imagination is more important than knowledge. (상상력은 지식보다 중요하다.)",
    author: "알버트 아인슈타인 (Albert Einstein)",
  },

  {
    quote:
      "Stay hungry, stay foolish. (배고픈 마음을 간직하고 어리석음을 지키라.)",
    author: "스티브 잡스 (Steve Jobs)",
  },

  {
    quote:
      "Education is the most powerful weapon which you can use to change the world. (교육은 세상을 변화시킬 수 있는 가장 강력한 무기이다.)",
    author: "넬슨 만델라 (Nelson Mandela)",
  },
  {
    quote:
      "Nothing in life is to be feared, it is only to be understood. (인생에서 두려워할 것은 없고, 이해하기만 하면 된다.)",
    author: "마리리 어떄 (Marie Curie)",
  },

  {
    quote:
      "Not all of us can do great things. But we can do small things with great love. (우리 모두가 위대한 일을 할 수 있는 것은 아니지만, 우리는 큰 사랑으로 작은 일을 할 수 있다.)",
    author: "마더 테레사 (Mother Teresa)",
  },

  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts. (성공은 영원하지 않고, 실패는 치명적이지 않다. 계속하기 위한 용기가 중요하다.)",
    author: "윈스턴 처칠 (Winston Churchill)",
  },
  {
    quote:
      "Ask not what your country can do for you, ask what you can do for your country. (당신의 나라가 당신을 위해 무엇을 할 수 있는지 묻지 말고, 당신이 당신의 나라를 위해 무엇을 할 수 있는지 생각해 보라.)",
    author: "존 F. 케네디 (John F. Kennedy)",
  },
  {
    quote:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. (어둠은 어둠을 몰아낼 수 없고, 오직 빛만이 그럴 수 있다. 미움은 미움을 몰아낼 수 없고, 오직 사랑만이 그럴 수 있다.)",
    author: "마르틴 루터 킹 (Martin Luther King Jr.)",
  },
  {
    quote:
      "When they go low, we go high. (그들이 비열하게 행동할 때, 우리는 더 높은 곳을 향해 가라.)",
    author: "미셸 오바마 (Michelle Obama)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:Last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
