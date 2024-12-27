import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./style.css?inline";
import {LuBook, LuGithub, LuX} from "@qwikest/icons/lucide";

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <footer>
            <div class="main-container">
                <div class="icon-text">// CONTACT.md</div>
                <div class="icon-container">
                    <div class="icon-content">
                        <a href="https://github.com/thirdlf03" target="_" aria-label="GitHubのリンクです。">
                            <div style={{color: "#d1d5db", fontSize: "24px"}}><LuGithub/></div>
                        </a>
                    </div>
                    <div class="icon-content">
                        <a href="https://zenn.dev/thirdlf" target="_" aria-label="Zennのリンクです。">
                            <div style={{color: "#d1d5db", fontSize: "24px"}}><LuBook/></div>
                        </a>
                    </div>
                    <div class="icon-content">
                        <a href="https://x.com/thirdlf1" target="_" aria-label="Xのリンクです。">
                            <div style={{color: "#d1d5db", fontSize: "24px"}}><LuX/></div>
                        </a>
                    </div>
                </div>
            </div>
            <br/>
            <div class="footer-container">
                <span class="footer-text">thirdlf@dev</span>:<span style={{color: "#63b3ed"}}>/portfolio</span> $ sudo
                apt update now
            </div>
        </footer>
    )
})