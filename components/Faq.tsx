const questions = [
    {
        question: "Est-ce que mon argent est vraiment sécurisé ?",
        answer: "Oui, toutes les opérations sont protégées et tracées. Nous assurons une transparence totale et aucun frais caché ne vous sera demandé."
    },
    {
        question: "Combien de temps faut-il pour voir les gains ?",
        answer: "Votre investissement est activé en moins d’une heure et vous recevez vos gains directement sur votre compte rapidement après."
    },
    {
        question: "Ai-je besoin d’être un expert en trading ?",
        answer: "Pas du tout ! Le processus est simple, guidé étape par étape, et ne nécessite aucune compétence technique."
    },
    {
        question: "Puis-je contacter un conseiller si j’ai des questions ?",
        answer: "Oui, un support personnalisé est disponible en permanence via WhatsApp pour répondre à toutes vos questions rapidement."
    },
    {
        question: "Y a-t-il des frais supplémentaires ou cachés ?",
        answer: "Aucun frais caché. Tout est clair dès le départ, sans surprises."
    },
    {
        question: "Que se passe-t-il si je suis insatisfait ?",
        answer: "Votre satisfaction est notre priorité. N’hésitez pas à contacter notre support pour toute demande ou assistance."
    }
];

export default function Faq() {

    return <div className="flex flex-col items-center justify-center py-8 container">
        <h1 className="text-3xl font-bold mb-4">Foire Aux Questions</h1>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className="questions">
                {questions.map((q, idx) => (
                    <details
                        key={q.question}
                        className="bg-[#F3F4F6] dark:bg-[#1E293B] rounded-lg shadow-2xl mb-2 transition-all"
                    >
                        <summary className="flex items-center justify-between cursor-pointer px-2 md:px-4 py-2 md:py-3 font-semibold select-none">
                            <span className="flex items-center gap-2">
                                <span className="text-lg font-bold mr-2">+</span>
                                {q.question}
                            </span>
                            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-400 dark:bg-[#0F172A] text-xs font-semibold">+</span>
                        </summary>
                        <div className="px-6 py-4 text-sm">{q.answer}</div>
                    </details>
                ))}
            </div>

            <div className="flex flex-col w-full h-full">
                <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
                    <img src="./faq-img.png" alt="?" className="w-auto h-44" />
                    <h2 className="text-xl font-semibold">Autres questions</h2>
                    <p className="text-center">Vous pouvez nous posez toutes les questions qui peuvent vous aider à de plus amples compréhensions sur <a href="https://wa.link/fb90tg" className="text-[#34D399] italic">WhatsApp au +228 91 90 28 24</a> </p>
                </div>
            </div>
        </div>
    </div>
}