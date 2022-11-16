export class GitHubToken {
  private token: string;
  constructor() {
    // .env ファイルの内容を環境変数に反映
    const token = process.env.NEXT_PUBLIC_MYAPP_GITHUB_TOKEN;
    if (typeof token === "undefined") {
      throw new Error("MYAPP_GITHUB_TOKEN cannot be found");
    }
    this.token = token;
  }

  get value() {
    return this.token;
  }
}
