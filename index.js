const add = (x,y) => {
    if(!x || !y) return "";       
    x = parseInt(x);
    y = parseInt(y);
    if(x+y < 10){
      return "10より小さい";      
    }
    return "10より大きい"
  }

  function OnButtonClick(mozi) {
    target = document.getElementById("output");
    // サンプル
    // https://drive.google.com/file/d/1hKlZh7-v0wLlJU59jiPbYDbWOQu3SkwA/view?usp=sharing
    const words = mozi.split('/');
    //googleUrlId = document.getElementById("googleUrl").nodeValue;
    target.innerHTML = "https://docs.google.com/uc?id=" + words[5];
    targetMozi = document.getElementById("outputmozi");
    targetMozi.innerHTML = ```<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://doc-0s-24-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/lenvqdrkke59pckbkifbllu6prhb2j1o/1620312075000/07878243188178220479/*/1hKlZh7-v0wLlJU59jiPbYDbWOQu3SkwA" data-iframely-url="//cdn.iframe.ly/0lCuwOk"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>```
  };