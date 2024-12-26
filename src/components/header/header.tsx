import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./style.css?inline";

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <header>
            <div class="header-container">
                <h3><a href="/">thirdlfさんだよー</a></h3>
                <ul>
                    <li><a href="/zenn">Zenn</a></li>
                    <li><a href="/github">Github</a></li>
                </ul>
            </div>
        </header>
    )
})