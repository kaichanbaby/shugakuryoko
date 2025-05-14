document.addEventListener('DOMContentLoaded', () => {
    // ボタン要素の取得
    const scratchBtn = document.getElementById('scratch-btn');
    const youtubeBtn = document.getElementById('youtube-btn');
    const coverBtn = document.getElementById('cover-btn'); // ← 応募表紙のボタン

    // コンテンツ要素の取得
    const scratchInfo = document.getElementById('scratch');
    const youtubeInfo = document.getElementById('youtube');
    const coverSection = document.getElementById('cover-section'); // ← 応募表紙のセクション

    // ログ出力（デバッグ用）
    console.log("ボタン:", scratchBtn, youtubeBtn, coverBtn);
    console.log("コンテンツ:", scratchInfo, youtubeInfo, coverSection);

    // ボタンのクリック処理
    scratchBtn.addEventListener('click', () => {
        scratchInfo.style.display = 'block';
        youtubeInfo.style.display = 'none';
        coverSection.style.display = 'none';
        console.log("Scratchの紹介が表示されました");
    });

    youtubeBtn.addEventListener('click', () => {
        scratchInfo.style.display = 'none';
        youtubeInfo.style.display = 'block';
        coverSection.style.display = 'none';
        console.log("YouTubeの紹介が表示されました");
    });

    coverBtn.addEventListener('click', () => {
        scratchInfo.style.display = 'none';
        youtubeInfo.style.display = 'none';
        coverSection.style.display = 'block';
        console.log("応募表紙が表示されました");
    });
});
