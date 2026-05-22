<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PORTFOLIO | フロントエンド作品集</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="data:,">
</head>
<body class="bg-top">

    <header>
        <a href="index.html" class="header-logo-area" style="text-decoration: none;">
            <img src="gazou/logo.png" alt="logo" class="header-logo-img">
            <span class="logo-text">崩壊スターレイル</span>
        </a>
        <div class="logo">ポートフォリオ</div>
        <nav>
            <ul>
                <li><a href="index.html">ホーム</a></li>
                <li><a href="info.html">技術解説</a></li>
                <li><a href="gacha.html">ガチャ</a></li>
                <li><a href="support.html">コンタクト</a></li>
            </ul>
        </nav>
    </header>

    <div class="video-background-container">
        <iframe id="bg-video" 
                src="https://www.youtube.com/embed/EMT6GmhDiBk?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=EMT6GmhDiBk&controls=0&modestbranding=1&vq=hd1080&rel=0" 
                frameborder="0" allow="autoplay; encrypted-media">
        </iframe>
    </div>

    <div class="video-controls">
        <button id="unmute-btn" class="control-btn">🔇 ミュート解除</button>
    </div>

    <main class="home-scroll-container">
        
        <section class="hero-section">
            <div class="hero-content">
                <h2 id="typewriter"></h2>
                <p class="hero-sub-text">フロントエンドの技術で、没入感のあるWeb体験を構築する。</p>
            </div>
        </section>

        <section class="description-section">
            <div class="info-card">
                <h3>作品概要：ファンサイト兼ガチャシミュレーター</h3>
                <p>
                    『崩壊：スターレイル』の世界観をWeb上に再現した、フロントエンド実装の実績用プロトタイプです。<br>
                    ゲーム内のSF的で近未来的なデザインをCSSで表現し、JavaScriptを用いた動的なギミック（ガチャシステム、演出ポップアップ、動画API制御）を統合しています。
                </p>
            </div>
            
            <div class="info-card">
                <h3>使用スキル & 技術スタック</h3>
                <p>
                    <strong>・HTML5 / CSS3:</strong> セマンティックなマークアップ、メディアクエリによるスマートフォン・PC両対応のレスポンスデザイン、斜めカットボタンなどの特殊形状UIの構築。<br>
                    <strong>・JavaScript (ES6):</strong> 確率制御に基づいたシミュレーションロジック、DOM操作による星5演出ポップアップ、YouTube Iframe Player APIを用いた背景動画の高度な制御。
                </p>
            </div>
            
            <div class="info-card">
                <h3>デザインとユーザー体験へのこだわり</h3>
                <p>
                    ただデータを表示するだけでなく、閲覧者が「おっ」と思うような没入感を意識しました。ページを開いた瞬間のタイプライター演出や、最高レア（星5）が当選した際の全画面カットイン演出など、細部のモーションと演出クオリティに徹底的にこだわっています。
                </p>
            </div>
        </section>

        <footer class="site-footer">
            <p>© 2026 Web Developer Portfolio. All Rights Reserved.</p>
        </footer>
    </main>

    <script src="script.js"></script>
</body>
</html>
