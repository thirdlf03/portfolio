import {component$, useStylesScoped$, useVisibleTask$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import {LuDatabase, LuCode2, LuCpu, LuTerminalSquare} from "@qwikest/icons/lucide";
import styles from "./style.css?inline";
import Typed from 'typed.js';
import "../global.css?inline"

export const useGithubAPI = routeLoader$(async () => {
    const response = await fetch("https://ungh.cc/users/thirdlf03/repos");
    return await response.json();
});

export const useZennAPI = routeLoader$(async () => {
    const response = await fetch("https://zenn.dev/api/articles?username=thirdlf&order=latest");
    return await response.json();
})

export const Profile = component$(() => {
    useStylesScoped$(styles);

    // eslint-disable-next-line
    useVisibleTask$(() => {
        const options = {
            strings: [
                `<span class="profile-keyword">const</span> developer = {<br><span class="profile-label">name:</span> <span class="profile-value">"thirdlf"</span>,<br><span class="profile-label">role:</span> <span class="profile-value">"Student"</span>,<br><span class="profile-label">hobbies:</span> [<span class="profile-value">"Programming", "Game", "Anime"</span>],<br><span class="profile-label">location:</span> <span class="profile-value">"Japan, Fukuoka"</span>,<br><span class="profile-label">language:</span> [<span class="profile-value">"Python"</span>]<br>};`
            ],
            typeSpeed: 22,
            showCursor: true,
            cursorChar: '|',
            loop: false,
        };

        const typed = new Typed('#typed-output', options);

        return () => {
            typed.destroy();
        };
    });

    return (
        <div class="profile-container">
            <div class="profile-header">// MAIN PROFILE</div>
            <div class="profile-content">
                <div id="typed-output"></div>
            </div>
        </div>
    );
})

export const Skill = component$(() => {
    useStylesScoped$(styles);
    return (
        <div>
            <div class="section-text">
                <h1>
                    Basic Skills
                </h1>
            </div>
            <div class="skill-container">
                {[
                    {icon: LuCode2, title: "Frontend", tech: "ReactNative・Qwik・TypeScript"},
                    {icon: LuDatabase, title: "Backend", tech: "FastAPI・Vapor・Go・Laravel・Mysql・Supabase"},
                    {icon: LuCpu, title: "Infrastructure", tech: "Docker・Cloudflare・Firebase・AWS・GCP"},
                    {icon: LuTerminalSquare, title: "Others", tech: "C++・GraphQL・Git・Github Actions"},
                ].map((item, index) => (
                    <div key={index} class="skill-card" style={{animationDelay: `${0.5 + index * 0.2}s`}}>
                        <div class="skill-card-header">
                            <div class="icon-rotate">
                                <item.icon />
                            </div>
                            <span class="skill-title">{item.title}</span>
                        </div>
                        <div class="skill-tech">{item.tech}</div>
                    </div>
                ))}
            </div>
        </div>
    )
})

export const Github = component$(() => {
    useStylesScoped$(styles);
    const repos = useGithubAPI()
    return (
        <>
            <h1 class="section-text">GitHub Repos</h1>
            <div class="container fade-in">
                {repos.value.repos.map((repo: any) => (
                    <div key={repo.name} class="container-content">
                        <h1 class="github-title"><a href={`https://github.com/${repo.repo}`} target="_">{repo.name}</a></h1>
                        <p class="github-description">{repo.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
})

export const Zenn = component$(() => {
    useStylesScoped$(styles);
    const zennArticles = useZennAPI()
    return (
        <>
        <h1 class="section-text">Zenn Articles</h1>
            <div class="container" style={{marginBottom: "2rem"}}>
            {zennArticles.value.articles.map((article: any) => (
                    <div key={article.id} class="container-content">
                        <h1 class="zenn-title"><a href={`https://zenn.dev/${article.path}`} target="_">{article.title}</a></h1>
                    </div>
                ))}
            </div>
        </>
    )
})

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <div class="main-container">
            <Profile />
            <Skill/>
            <Github/>
            <Zenn/>
        </div>
    );
});

export const head: DocumentHead = {
    title: "thirdlf portfolio",
    meta: [
        {
            name: "description",
            content: "ポートフォリオサイトです。",
        },
    ],
};