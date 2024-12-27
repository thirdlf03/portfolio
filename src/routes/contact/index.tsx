import {component$, useSignal, useStylesScoped$, useTask$} from "@builder.io/qwik";
import styles from "./style.css?inline";
import {Form, routeAction$} from "@builder.io/qwik-city";
import {LuSend} from "@qwikest/icons/lucide";


export const useContact = routeAction$(async (props) => {
    // Todo ちゃんとフォーム実装しようね
    console.log(props);
    const {name, email, message} = props;
    console.log("hello tom");
    console.log(name, email, message);
})

export default component$(() => {
    useStylesScoped$(styles)
    const email = useSignal<string>("");
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
            console.log(Math.random());
            isValid.value = true;
        }
    });

    return (
        <div class="main-container">
            <div class="form-container">
                <div class="title">
                    // CONTACT_FORM.bash
                </div>
                <Form action={Contact}>
                    <div class="form-inside-container">
                        <div class="form-input">
                            <span>$ </span><input name="name" placeholder="enter_name" required/>
                        </div>
                        <div class="form-input">
                            <span>$ </span><input name="email" placeholder="enter_email" required bind:value={email}/>
                        </div>
                        <div class="form-textarea">
                            <span>$ </span><textarea id="message" name="message" required placeholder="type_your_message"></textarea>
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