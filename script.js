// DOMの読み込みが完了してからスクリプトを実行するように設定
document.addEventListener('DOMContentLoaded', () => {
    // ボタン要素の取得
    const scratchBtn = document.getElementById('scratch-btn');
    const youtubeBtn = document.getElementById('youtube-btn');
    

    // コンテンツ要素の取得
    const scratchInfo = document.getElementById('scratch');
    const youtubeInfo = document.getElementById('youtube');

    // デバッグ用のログ出力
    console.log("ボタン要素:", scratchBtn, youtubeBtn);
    console.log("コンテンツ要素:", scratchInfo, youtubeInfo);

    // 各ボタンにクリックイベントを設定
    scratchBtn.addEventListener('click', () => {
        scratchInfo.style.display = 'block';
        youtubeInfo.style.display = 'none';
        console.log("Scratchの紹介が表示されました");
    });

    youtubeBtn.addEventListener('click', () => {
        youtubeInfo.style.display = 'block';
        scratchInfo.style.display = 'none';
        console.log("YouTubeの紹介が表示されました");
    });
});
