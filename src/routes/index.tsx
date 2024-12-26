import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./style.css?inline";

export const useGithubAPI = routeLoader$(async () => {
    const response = await fetch("https://ungh.cc/users/thirdlf03/repos");
    return await response.json();
});

export const useZennAPI = routeLoader$(async () => {
    const response = await fetch("https://zenn.dev/api/articles?username=thirdlf&order=latest");
    return await response.json();
})

export default component$(() => {
    useStylesScoped$(styles);
    const repos = useGithubAPI()
    const zennArticles = useZennAPI()
    return (
        <>
            <h1>Hi! I'm thirdlf</h1>
            <p>27卒の学生エンジニアです。<br />ポートフォリオサイトを作成中です。</p>
            <h1>Github repos</h1>
            <div class="container">
                {repos.value.repos.map((repo: any) => (
                    <div key={repo.name} class="container-content">
                        <a href={`https://github.com/${repo.repo}`}>リンク</a>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                        <p>★{repo.stars}</p>
                    </div>
                ))}
            </div>
            <h1>Zenn articles</h1>
            <div class="container">
                {zennArticles.value.articles.map((article: any) => (
                    <div key={article.id} class="container-content">
                        <h1>{article.title}</h1>
                    </div>
                ))}
            </div>

        </>
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