const add = (x,y) => {
    if(!x || !y) return "";       
    x = parseInt(x);
    y = parseInt(y);
    if(x+y < 10){
      return "10より小さい";      
    }
    return "10より大きい"
  }

  function OnButtonClick(url, titleName) {
    target = document.getElementById("output");
    // サンプル
    // https://drive.google.com/file/d/1hKlZh7-v0wLlJU59jiPbYDbWOQu3SkwA/view?usp=sharing
    const words = url.split('/');
    //googleUrlId = document.getElementById("googleUrl").nodeValue;
    target.innerHTML = "https://docs.google.com/uc?id=" + words[5];
    targetEmbedded = document.getElementById("embedded")
    targetEmbedded.value = `<iframe width=\"560\" height=\"315\" src=\"https://kogepan159.github.io/google-drive-voice-html-generator/music_player/music_player.html?title=${titleName}&url=https://docs.google.com/uc?id=${words[5]}\"></iframe>`
  };