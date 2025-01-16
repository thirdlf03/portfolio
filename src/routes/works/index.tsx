import {component$, useStylesScoped$} from "@builder.io/qwik";
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
                    {title: "3段クルーン", describe: "https://zawa.thirdlf03.com"},
                    {title: "QRコード神経衰弱", describe: "https://topaz.dev/projects/a939290be6545eff5895"},
                    {title: "刹那", describe: "https://topaz.dev/projects/575f49eb3bc26cf370b1"},
                    {title: "AtCoder環境構築", describe: "https://github.com/thirdlf03/setup-atcoder"},
                ].map((item, index) => (
                    <div key={index} class="work-card">
                        <div class="work-card-header">
                            <span class="work-title">{item.title}</span>
                        </div>
                        <div class="work-describe"><a href={item.describe}>{item.describe}</a></div>
                    </div>
                ))}
            </div>
        </>
    )
})