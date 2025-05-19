import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./style.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <div class="main-container">
        <div class="title">
          <h1>My Works</h1>
        </div>
      </div>
      <div class="work-container">
        {[
          { title: "exit-8", url: "https://topaz.dev/projects/ccc1446d70a00e93ff2d", describe: "この Progate、なんか変...？", techstack: "TypeScript, React, Webcontainers" },
          { title: "緑クイズ~~筋肉を添えて~~", url: "https://topaz.dev/projects/e84022a13ca9e42922cc", describe: "リングコンで回答するクイズ", techstack: "Rust, TypeScript(hono), js" },
          { title: "気合いオセロ", url: "https://topaz.dev/projects/26cc73ac674452fd6250", describe: "オセロAIを気合いで倒す!!", techstack: "Golang (ebitengin), gRPC" },
          { title: "3段クルーン", url: "https://zawa.thirdlf03.com", describe: "例のギャンブルのやつ", techstack: "three.js, cannon-es, js, blender" },
          { title: "QRコード神経衰弱", url: "https://topaz.dev/projects/a939290be6545eff5895", describe: "QRコードで神経衰弱", techstack: "ReactNative, Firestore, Elixir, other..." },
          { title: "刹那", url: "https://topaz.dev/projects/575f49eb3bc26cf370b1", describe: "刹那の見切り", techstack: "Swift, Apollo, GraphQL" },
          { title: "AtCoder環境構築", url: "https://github.com/thirdlf03/setup-atcoder", describe: "AtCoder環境構築", techstack: "null" },
        ].map((item, index) => (
          <div key={index} class="work-card">
            <div class="work-card-header">
              <span class="work-title">{item.title}</span>
            </div>
            <div class="work-describe">{item.describe}</div>
            <div class="work-describe"><br /><div class="work-stack">Tech Stack:</div>{item.techstack}</div>
            <div class="work-describe"><br /><div class="work-link">Links:</div><a href={item.url}>{item.url}</a></div>
          </div>
        ))}
      </div>
    </>
  )
})
