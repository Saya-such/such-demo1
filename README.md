# such Demo Page

架空広告代理店△△ inc.のコーポレートサイトのトップページを想定したデモページです。

## 🌐 URL

[https://saya-such.github.io/such-demo1/](https://saya-such.github.io/such-demo1/)

## 📌 概要

このリポジトリは、such(齊藤沙耶)のフロントエンド実装力をアピールするためのデモページです。
デザインから実装まで自作し、**アニメーション表現**や**アクセシビリティへの配慮**を取り入れています。

## 🛠 使用技術

- Framework: [Astro](https://astro.build/) v5.10.1
- Language: TypeScript
- Styling: Tailwind CSS v4.1.11 + [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite)
- Animation: GSAP / Swiper / Lenis
- Build / Deploy: GitHub Actions + GitHub Pages

## ✨ 実装ポイント

- 画像や動画を使わずに**できるだけコードのみでアニメーションを表現**しました。(ローディング/リロード時や各セクションタイトル等のテキストグラデーション/Heroセクションのスライダー切り替え/キャッチコピーのアニメーションなど)
- ループ処理やメニューの開閉等、不要なメモリの消費を避けるために**GSAPのTimelineやSwiperインスタンスの適切な制御**を行なっています。
- アクセシビリティを考慮し、alt属性/aria属性を適切に記述。(メニュー開閉時にaria-expandedの切り替えも行なっています。)
- 構造化マークアップに対応。
- dataに格納してある画像や記事データを更新することで、簡単に使用しているデータの変更が可能。
- 関数型プログラミングを意識し、できるだけコンポーネント内で処理を完結させるような設計。
- **CLSを意識**し、アニメーションによって高さが変わらないよう気をつけて設計しました。
- モバイル環境でのUIバー表示に対応し、スクロール時の高さ変化やリサイズによるレイアウト崩れを防止しています。
- 関数名の命名規則を決めてある程度統一し、JSDocも丁寧に記載しました。

## 🚀 セットアップ方法

```bash
# リポジトリをクローン
git clone https://github.com/Saya-such/such-demo1.git

# ディレクトリへ移動
cd such-demo1

# パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

## 📦 ビルド / デプロイ

```bash
# ビルド
npm run build

# プレビュー
npm run preview
```

GitHub Actions を利用し、masterブランチのdistディレクトリを GitHub Pages へ自動デプロイしています。

## 📂 ディレクトリ構成

```bash
public/
├── fonts/ # フォントデータ
└── images/ # 画像データ
src/
├── animations/ # 共通アニメーション関数
├── components/ # UIコンポーネント
├── data/ # 画像や記事などのデータ管理
├── layout/ # レイアウト管理
├── pages/ # 各ページ(下層ページはないのでindex.astro/404.astroのみ)
├── styles/ # グローバルスタイル
└── types/ # 型定義
```

## 🧩 関数の命名規則

### I. プレフィックスのルール

- **init**　ページロード時に一度だけ呼ばれるような初期化処理  
  ※初期化：設定値の準備、イベント登録、状態のリセットなど
- **create**　クラスや timeline の生成を行い、戻り値としてそれを返す関数
- **setup**　準備段階の処理・構造の構築  
  ※構築：DOM の挿入、配列の構成、必要なオブジェクトの生成など
- **register**　登録する
- **manage**　管理する
- **handle**　イベント発火時の処理など
- **add**　setupと同じように「登録」として使ってOK
- **start**　アニメーションなどを明示的に開始する時
  ※開始：何かが起動・再生・実行されるきっかけになる処理
- **enable**　一時的に機能を有効化する時
  ※有効化：機能をオンにする、イベントを一時的にアクティブにするなど
- **disable**　一時的に無効化
- **reset**　初期状態に戻す
- **destroy**　完全削除

### II. コンポーネント

特定のコンポーネント専用の関数の場合、そのコンポーネント名を付ける。

### III. 対象の要素

アニメーション対象の要素など、その関数が実行したときに作用する対象の要素があればそれを追加。

### IV. 動作

関数の実行により加えられる動作。今のところFadeIn, Effect, Flip, Gradient, Loopなどを使用している。

### V. 役割

その関数の役割(=何をする関数なのか)。

- **Animation**
- **Manager**
- **Controller**
- **Timeline**
- **Handler**　イベント処理系
- **Service**　データ取得や外部APIとのやりとり
- **Util**　汎用ユーティリティ

## 📝 備考

- 開発環境: Node.js v22.x 系で動作確認済み。
- Astroの表示速度を活かす為ローディングはシンプルめに実装し、また、非同期処理は使用していません。
- package.jsonにてデプロイ時のエラー回避等のために各パッケージのバージョン指定をしています。最新バージョンを使用する際は^を追加し、適宜設定を書き換えてください。

## 🌈 今後の改善予定

- 記事部分を詳細ページ or ポップアップに拡張予定(時間があればCMS連携もあり)
