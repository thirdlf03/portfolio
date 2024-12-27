import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./style.css?inline";

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <>
            <div class="main-container">
                <div class="title">
                    <h1>Atode Tyanto Tukuru...</h1>
                </div>
            </div>
            <div class="work-container">
                {[
                    {title: "ダミー1", describe: "ファースト"},
                    {title: "ダミー２", describe: "セカンド"},
                    {title: "ダミー３", describe: "サード"},
                    {title: "ダミー4", describe: "なんか"},
                ].map((item, index) => (
                    <div key={index} class="work-card">
                        <div class="work-card-header">
                            <span class="work-title">{item.title}</span>
                        </div>
                        <div class="work-describe">{item.describe}</div>
                    </div>
                ))}
            </div>
        </>
    )
})