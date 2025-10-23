// Footer component for the Long Autumn website include instagram icon, tiktok, and youtube icon, with links to the band's social media pages and a copyright notice. place the copyright notice at the very bottom, place the socials above it
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="flex space-x-6 mb-4">
                    <a href="https://www.instagram.com/longautumnband/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg className="w-6 h-6 fill-current hover:text-gray-400" viewBox="0 0 24 24">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z" />
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@longautumnband" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <svg className="w-6 h-6 fill-current hover:text-gray-400" viewBox="0 0 24 24">
                            <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96s9.96-4.46 9.96-9.96v-3.54h-3.54v1.77c-1.18-.7-2.6-1.13-4.16-1.13zM14.25 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@longautumnband" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <svg className="w-6 h-6 fill-current hover:text-gray-400" viewBox="0 0 24 24">
                            <path d="M19.8 7.2c-.2-1.4-1.4-2.5-2.8-2.7C14.6 4 12 4 12 4s-2.6 0-4.9.5c-1.4.2-2.6 1.3-2.8 2.7C4.5 9.5 4.5 12 4.5 12s0 2.5.8 4.8c.2 1.4 1.4 2.5 2.8 2.7 2.3.5 4.9.5 4.9.5s2.6 0 4.9-.5c1.4-.2 2.6-1.3 2.8-2.7.8-2.3.8-4.8.8-4.8s0-2.5-.8-4.8zM10 15V9l5 3-5 3z" />
                        </svg>
                    </a>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Long Autumn. All rights reserved.</p>
            </div>  
        </footer>   
    );
}
