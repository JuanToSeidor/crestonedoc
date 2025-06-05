import type {ReactNode} from 'react';
import { useState } from 'react';


const faqs = [
    {
        question: "¿Cómo puedo registrarme?",
        answer: "Para registrarte, haz clic en el botón de registro y sigue las instrucciones."
    },
    {
        question: "¿Puedo cambiar mi contraseña?",
        answer: "Sí, puedes cambiar tu contraseña desde la configuración de tu perfil."
    },
    {
        question: "¿Dónde encuentro mis documentos?",
        answer: "Tus documentos están disponibles en la sección 'Mis Documentos' del menú principal."
    }
];

function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {faqs.map((faq, idx) => (
                <div key={idx} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee' }}>
                    <button
                        style={{
                            width: '100%',
                            textAlign: 'left',
                            background: 'none',
                            border: 'none',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            padding: '0.75rem 0',
                            cursor: 'pointer',
                            
                        }}
                        onClick={() => handleToggle(idx)}
                        aria-expanded={openIndex === idx}
                        aria-controls={`faq-panel-${idx}`}
                        id={`faq-header-${idx}`}
                    >
                        {faq.question}
                    </button>
                    {openIndex === idx && (
                        <div
                            id={`faq-panel-${idx}`}
                            role="region"
                            aria-labelledby={`faq-header-${idx}`}
                            style={{ padding: '0.5rem 0 1rem 0', color: '#444', transition: 'ease all 0.3s', }}
                        >
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function faq(): ReactNode{
    return(
        <div className="container margin-vert--lg"> 
            <div className="row">
                <div className="col col--5">
                    <h1>Frequently asked questions</h1>
                    <p>Welcome to FAQ section! we´ve compiled a list of commonly asked question to provide you with quick and informative answer.</p>
                    <p>If you want to explore all the questions, go to this link. Where you will find all the answers made by the users.</p>
                </div>
                <div className="col">

                    <FAQAccordion />
                </div>
            </div>
        </div>
    )
}