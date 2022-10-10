import session from "express-session";

declare module "express-session" {
  interface SessionData {
    enginnerId: number;
  }
}

export const sessionExpress = session({
  // TODO:環境変数から取得できるようにする
  secret: "keep-growing-kusa",
  name: "session", // default: connect.sid
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: "/", // default
    httpOnly: true, // default
    maxAge: 10 * 1000, // 10sec
    secure: false,
  },
});
