import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, //IPアドレスを有効化
  },
  root: "./src", //開発ディレクトリ設定
  build: {
    base: "./", //相対パスでビルドする
    outDir: "../dist", //出力場所の指定
    rollupOptions: {
      // ファイル出力設定
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          }
          //ビルド時のCSS名を明記してコントロールする
          if (extType === "css") {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
      },
      input: {
        index: resolve(__dirname, "./src/index.html"),
        /*
	  複数HTMLページを出力したい時にここへ追記していく
	  xxx: resolve(__dirname, './src/xxx.html'),
	*/
        list: resolve(__dirname, "./src/list.html"),
      },
    },
  },
  plugins: [],
});
