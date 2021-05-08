const add = (x,y) => {
    if(!x || !y) return "";       
    x = parseInt(x);
    y = parseInt(y);
    if(x+y < 10){
      return "10より小さい";      
    }
    return "10より大きい"
  }

  function OnButtonClick(url, titleName, googleUrlImage) {
    target = document.getElementById("output");
    // サンプル
    // https://drive.google.com/file/d/1hKlZh7-v0wLlJU59jiPbYDbWOQu3SkwA/view?usp=sharing
    const words = url.split('/');
    const googleUrlImageWords = googleUrlImage.split('/');
    targetEmbedded = document.getElementById("embedded")
    targetEmbedded.value = `<iframe width=\"560\" height=\"160\" src=\"https://kogepan159.github.io/google-drive-voice-html-generator/music_player/music_player.html?title=${titleName}&urlId=https://docs.google.com/uc?id=${words[5]}\&imageId=${googleUrlImageWords[5]}\"></iframe>`
  };

  function copyToClipboard() {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("embedded");

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

    // コピーをお知らせする
    alert("コピーできました！ : " + copyTarget.value);
  };