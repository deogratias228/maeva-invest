export default function Confidence() {
    const items = [
        {
            title: "Investissement activé en 1h chrono",
            description: "Lancez votre capital en moins de 60 minutes, sans attente ni interruption.",
            icone: './icons/confidence/img1.png'
        },
        {
            title: "Sécurité et transparence totales",
            description: "Vos opérations sont tracées, protégées et sans frais cachés.",
            icone: './icons/confidence/img2.png'
        },
        {
            title: "Zéro expérience requise",
            description: "Un parcours simple et guidé, accessible à tous, même sans compétences techniques.",
            icone: './icons/confidence/img3.png'
        },
        {
            title: "Support direct sur WhatsApp",
            description: "Un conseiller réel vous accompagne rapidement, par message, en toute simplicité.",
            icone: './icons/confidence/img4.png'
        },
    ];

    return <div className="w-full flex flex-col gap-y-8 justify-center py-4 mt-8 md:py-8 container">
        <h1 className="title text-2xl font-bold px-4 border-l-4 border-l-[#34D399]">Pourquoi des centaines nous font confiance ?</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {items.map((step, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center bg-[#F3F4F6] dark:bg-[#1E293B] rounded-xl px-2 py-2 md:py-3 md:px-4 h-full w-full"
                >
                    <div className="flex w-full h-full justify-center">
                        <img src={step.icone} alt={`Étape ${idx + 1}`} className="w-auto h-20" />
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-sm md:text-xl mb-3 font-bold text-center">{step.title}</span>
                        <span className="text-sx md:text-sm mb-3">{step.description}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
}