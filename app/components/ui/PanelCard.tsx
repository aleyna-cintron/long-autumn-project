import GrayscaleCosmicBg from './GrayscaleCosmicBg'

interface PanelCardProps {
  children: React.ReactNode
  title?: React.ReactNode
  background?: boolean
  className?: string
  fillParent?: boolean
  noBorderMobile?: boolean
}

export function PanelCard({
  title,
  children,
  background = false,
  className = '',
  fillParent = false,
  noBorderMobile = false,
}: PanelCardProps) {
  const borderClasses = noBorderMobile
    ? 'border-0 md:border-3 md:border-brutal-red/30'
    : 'border-3 border-brutal-red/30'

  const roundedClasses = noBorderMobile
    ? 'rounded-none md:rounded-xl'
    : 'rounded-xl'

  return (
    <div
      className={`relative ${roundedClasses} ${borderClasses} flex flex-col ${
        fillParent ? 'flex-1' : ''
      } ${className}`}
    >
      {background && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GrayscaleCosmicBg />
        </div>
      )}

      <div className="relative z-10 flex flex-col flex-1">
        {title && (
          <div className="relative">
            <div className={`absolute inset-0 bg-black/70 z-0 ${noBorderMobile ? 'rounded-none md:rounded-t-lg' : 'rounded-t-lg'}`} />
            <div className={`absolute inset-0 bg-brutal-red/10 backdrop-blur-lg z-10 ${
              noBorderMobile ? 'rounded-none md:rounded-t-lg border-0 md:border-b-2 md:border-brutal-red/50' : 'rounded-t-lg border-brutal-red/50 border-b-2'
            }`} />
            <h2 className="relative z-20 p-4 md:py-6 px-8 text-xl md:text-2xl lg:text-3xl 2xl:text-3xl 3xl:text-4xl 4xl:text-4xl text-text-primary text-center tracking-wider uppercase">
              {title}
            </h2>
          </div>
        )}

        <div
          className={`relative z-10 md:p-8 flex-1 ${
            !background ? `bg-background/70 shadow-[inset_0_2px_20px_rgba(0,0,0,0.3)] ${noBorderMobile ? 'rounded-none md:rounded-b-lg' : 'rounded-b-lg'}` : ''
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
