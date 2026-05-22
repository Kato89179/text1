// =========================================
// 1. タイプライター演出（HOME用）
// =========================================
const typeElement = document.getElementById("typewriter");
if (typeElement) {
    const text = "その旅が、いつか群星に辿り着かんことを——";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typeElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 120);
        }
    }
    window.addEventListener('load', () => setTimeout(typeWriter, 500));
}

// =========================================
// 2. ガチャ（跳躍）システム
// =========================================

// 星5キャラクター設定（画像とセリフ付き）
const star5Characters = [
    { 
        name: "火花", 
        rarity: 5, 
        phrase: "脳汁どばどばで行くよ～！",
        image: "gazou/hibana_icon.webp" 
    },
    { 
        name: "爻光", 
        rarity: 5, 
        phrase: "天意に逆らうのは難しいね。",
        image: "gazou/koukou_icon.webp" 
    }
];

// 星4キャラクター設定（アンノウン防止のためオブジェクト形式に修正）
const star4Characters = [
    { name: "丹恒" },
    { name: "三月なのか" }
];

let totalGachaCount = 0;

function playGacha(times) {
    const resultDisplay = document.getElementById('gacha-result');
    if (!resultDisplay) return;

    let results = [];
    
    for (let i = 0; i < times; i++) {
        totalGachaCount++;
        let rand = Math.random() * 100;
        
        if (rand < 2) { // 2%で星5
            let char = star5Characters[Math.floor(Math.random() * star5Characters.length)];
            results.push(`<span class="win-5">★5 ${char.name}</span>`);
            triggerWinEffect(char);
        } else if (rand < 15) { // 13%で星4
            let char = star4Characters[Math.floor(Math.random() * star4Characters.length)];
            results.push(`<span class="win-4">★4 ${char.name}</span>`);
        } else {
            results.push(`<span class="win-3">★3 武器</span>`);
        }
    }
    
    resultDisplay.innerHTML = results.join(" / ");
    const countDisplay = document.getElementById('gacha-count');
    if (countDisplay) countDisplay.innerText = totalGachaCount;
}

// 星5当選時の全画面ポップアップ演出
function triggerWinEffect(char) {
    const effect = document.createElement('div');
    effect.className = 'gacha-win-overlay';
    effect.innerHTML = `
        <div class="win-content">
            <div class="win-new">NEW!!</div>
            <div class="win-avatar-frame">
                <img src="${char.image}" alt="${char.name}" class="win-avatar">
            </div>
            <div class="win-name">${char.name}</div>
            <div class="win-phrase">「${char.phrase}」</div>
            <button onclick="this.parentElement.parentElement.remove()" class="btn-close">確認</button>
        </div>
    `;
    document.body.appendChild(effect);
}

function resetGacha() {
    totalGachaCount = 0;
    const countDisplay = document.getElementById('gacha-count');
    const resultDisplay = document.getElementById('gacha-result');
    if (countDisplay) countDisplay.innerText = "0";
    if (resultDisplay) resultDisplay.innerText = "「跳躍」ボタンを押して運命を手に入れよう";
}

// =========================================
// 3. キャラクター名簿（INFO）タブ切り替え
// =========================================
function showTab(event, charId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('show'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const target = document.getElementById(charId);
    if (target) target.classList.add('show');
    if (event) event.currentTarget.classList.add('active');
}

// =========================================
// 4. YouTube背景動画制御（API）
// =========================================
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    const videoElement = document.getElementById('bg-video');
    if (videoElement) {
        player = new YT.Player('bg-video', {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

function onPlayerStateChange(event) {
    // 動画が終了（ENDED）したら最初から再生（ループ）
    if (event.data == YT.PlayerState.ENDED) {
        event.target.playVideo();
    }
}

// ミュートボタンの制御
const unmuteBtn = document.getElementById('unmute-btn');
if (unmuteBtn) {
    unmuteBtn.addEventListener('click', function() {
        if (player && player.isMuted()) {
            player.unMute();
            this.innerText = "🔊 ミュート";
        } else if (player) {
            player.mute();
            this.innerText = "🔇 ミュート解除";
        }
    });
}

// サポート送信処理：アラートを出した後にフォームを空にする
function sendSupport() {
    alert('メッセージを送信しました！');
    const form = document.querySelector('.support-form');
    if (form) {
        form.reset(); // 入力内容をすべて消去
    }
}