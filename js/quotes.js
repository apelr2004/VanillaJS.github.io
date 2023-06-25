const quotes = [
    {
      quote: "내 솜씨를 제대로 보여줄 시간이군.",
      author: "by 이즈리얼"
    },
    {
      quote: "바위처럼 단단하게.",
      author: "by 말파이트"
    },
    {
      quote: "너도 같이 놀래? ㅎ 재밌겠다.",
      author: "by 애니"
    },
    {
      quote: "날 선택해줄줄은 정말 몰랐어..",
      author: "by 아무무"
    },
    {
      quote: "나는 더 나은 미래를 위해 싸운다.",
      author: "by 제이스"
    },
    {
      quote: "이 사건은 내가 맡죠.",
      author: "by 케이틀린"
    },
    {
      quote: "하핫 신나게 놀아볼까.",
      author: "by 징크스"
    },
    {
      quote: "일단 한대 맞아 질문은 나중에 하고.",
      author: "by 바이"
    },
    {
      quote: "힘의 균형은 유지되어야 한다.",
      author: "by 카사딘"
    },
    {
      quote: "그래.",
      author: "by 람머스"
    }
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;