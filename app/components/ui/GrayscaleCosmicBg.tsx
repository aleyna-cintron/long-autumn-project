export default function GrayscaleCosmicBg(){
    return (
        <div
            className="absolute inset-0 rounded-lg"
            style={{
                backgroundImage: `url("/cosmic-bg.jpeg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%)',
                opacity: 0.70
            }}
        />
    )
}