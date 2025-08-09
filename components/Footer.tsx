import Logo from './Logo';

export default function Footer() {
    return <div className="py-8 flex justify-between" >
        <Logo />
        <div className="space-x-6 justify-between">
            <a href="https://deowoblesse.tech" target='_blank' className='hover:text-[#34D399] hover:font-semibold'>© Gratias Tech 2025</a>
            <a href="/" className='hover:text-[#34D399] hover:font-semibold'>Politique de confidentialité</a>
            <a href="/" className='hover:text-[#34D399] hover:font-semibold'>Politique des cookies</a>
            <a href="/" className='hover:text-[#34D399] hover:font-semibold'>Conditions d’utilisation</a>
        </div>
    </div>
}