import {component$, useSignal, useStylesScoped$, useTask$} from "@builder.io/qwik";
import styles from "./style.css?inline";
import {Form, routeAction$} from "@builder.io/qwik-city";
import {LuSend} from "@qwikest/icons/lucide";
import {createServerClient} from "supabase-auth-helpers-qwik";


export const useContact = routeAction$(async (props, requestEv) => {
    const supabaseClient = createServerClient(
        requestEv.env.get("PUBLIC_SUPABASE_URL")!,
        requestEv.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
        requestEv
    );
    const {name, email, message} = props;

    await supabaseClient.from("contact").insert({ name: name, email: email, message: message });

    await fetch(requestEv.env.get("PUBLIC_DISCORD_WEBHOOK_URL")!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: `<@1072626931012472852> 新しいお問い合わせだよ！\n${name} さんからのメッセージ！`,
            embeds: [
                {
                    title: "問い合わせ",
                    description: `お名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
                    color: 0x00ff00,
                },
            ],
        }),
    });
})

export default component$(() => {
    useStylesScoped$(styles)
    const name = useSignal<string>("");
    const email = useSignal<string>("");
    const message = useSignal<string>("");

    const isValid = useSignal<boolean>(true);
    const Contact = useContact();
    const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

    useTask$(({ track }) => {
        track(() => isValid);
        const newText = track(email);
        if (reg.test(newText)){
            isValid.value = false;
        }
        else{
            isValid.value = true;
        }
    });

    return (
        <div class="main-container">
            <div class="form-container">
                <div class="title">
                    // CONTACT_FORM.bash
                </div>
                <Form action={Contact} onSubmit$={async () => {
                        name.value = "";
                        email.value = "";
                        message.value = "";
                        window.alert("Message sent successfully!");
                    }}>
                    <div class="form-inside-container">
                        <div class="form-input">
                            <span>$ </span><input name="name" placeholder="enter_name" required bind:value={name}/>
                        </div>
                        <div class="form-input">
                            <span>$ </span><input name="email" placeholder="enter_email" required bind:value={email}/>
                        </div>
                        <div class="form-textarea">
                            <span>$ </span><textarea id="message" name="message" required placeholder="type_your_message" bind:value={message}></textarea>
                        </div>
                        <div>
                            <button disabled={isValid.value}><LuSend style={{marginRight: "10px"}}/>send</button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
})