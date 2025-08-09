export default function Steps() {
    const steps = [
        {
            'title': "Effectuez votre dépôt en toute sécurité.",
            "icone": './icons/step1.png'
        }, {
            'title': "Nous lançons votre investissement en moins de 1h.",
            'icone': './icons/step2.png'
        }, {
            'title': "Recevez vos gains directement sur votre compte.",
            'icone': './icons/step3.png'
        }, {
            'title': "Partagez votre succès avec confiance.",
            'icone': './icons/step4.png'
        }
    ];
    return <div className="w-full flex flex-col gap-y-8 justify-center py-4 mt-8 md:py-8 container">
        <h1 className="title text-2xl font-bold px-4 border-l-4 border-l-[#34D399]">Comment ça marche ?</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {steps.map((step, idx) => (
                <div
                    key={idx}
                    // className="flex flex-col items-center bg-gary-200 border dark:border-0 shadow border-gray-300 dark:bg-[#1E293B] rounded-xl px-2 py-2 md:py-3 md:px-4 h-full w-full"
                    className="flex flex-col items-center bg-gary-200 border-0 shadow border-gray-300 bg-[#1E293B] rounded-xl px-2 py-2 md:py-3 md:px-4 h-full w-full"
                >
                    <span className="mb-3">{step.title}</span>
                    <div className="flex w-full h-full items-end justify-end">
                        <img src={step.icone} alt={`Étape ${idx + 1}`} className="w-auto h-12" />
                    </div>
                </div>
            ))}
        </div>
    </div>
}