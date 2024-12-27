import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./style.css?inline";
import {LuTerminal} from "@qwikest/icons/lucide";

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <header>
            <div class="header-container">
                <div class="home">
                    <LuTerminal />
                    <span class="header-title"><a href="/">~/portfolio</a></span>
                </div>
                <span>&nbsp;$ cd</span>
                <span class="section section-text"><a href="/works">/works</a></span>
                <span class="section section-text"><a href="/contact">/contact</a></span>
            </div>
        </header>
    )
})