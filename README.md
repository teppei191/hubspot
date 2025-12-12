# creating_hubspot

HubSpotクローンプロジェクトのコードベースです。オリジナルのプロジェクトは https://www.figma.com/design/CTBHZl1tKwBYsX1JdDpN0F/creating_hubspot で確認できます。

## 機能

- Microsoft Azure ADによる認証機能
- セールスパイプラインのカンバンボード
- 企業詳細ページ
- エンタープライズグレードのUIコンポーネント

## セットアップ

### 1. 依存関係のインストール

```bash
npm i
```

### 2. Azure ADの設定

1. [Azure Portal](https://portal.azure.com) にアクセス
2. **Azure Active Directory** > **アプリの登録** > **新規登録** に移動
3. アプリケーションを登録：
   - 名前: HubSpot Clone（または任意の名前）
   - サポートされているアカウントの種類: ニーズに応じて選択
   - リダイレクトURI: `http://localhost:3000` （シングルページアプリケーション）
4. **アプリケーション（クライアント）ID** と **ディレクトリ（テナント）ID** をコピー
5. ルートディレクトリに `.env` ファイルを作成：

```bash
cp .env.example .env
```

6. `.env` ファイルをAzure ADの認証情報で更新：

```env
VITE_AZURE_CLIENT_ID=あなたのクライアントID
VITE_AZURE_AUTHORITY=https://login.microsoftonline.com/あなたのテナントID
VITE_REDIRECT_URI=http://localhost:3000
VITE_POST_LOGOUT_REDIRECT_URI=http://localhost:3000
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

アプリケーションは http://localhost:3000 でアクセスできます。

## 認証について

このアプリケーションは、Azure AD認証にMicrosoft Authentication Library (MSAL) を使用しています。アプリケーションにアクセスするには、Microsoftアカウントでサインインする必要があります。
