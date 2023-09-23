'use client'
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT || '');

    if (state.succeeded) {
        return <p className="text-green-500 text-xl font-bold">Obrigado pelo envio! Faremos contato em breve.</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="gap-2 flex flex-col items-center">
            <div className="gap-2 flex flex-col s20:flex-row">
                <input
                    className="rounded-md p-4 placeholder:text-darkText font-bold text-darkText"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Insira seu e-mail"
                />
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-8 py-4 font-bold bg-darkText text-center text-white rounded-lg"
                >
                    Solicitar contato
                </button>
            </div>
            <ValidationError className="text-red-500" prefix="Email" field="email" errors={state.errors} />
            <ValidationError errors={state.errors} />
        </form>
    );
}
