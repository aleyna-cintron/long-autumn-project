import GrayscaleCosmicBg from './GrayscaleCosmicBg'

interface PanelCardProps {
  children: React.ReactNode
  title?: string
  background?: boolean
  className?: string
  fillParent?: boolean
}

export function PanelCard({
  title,
  children,
  background = false,
  className = '',
  fillParent = false,
}: PanelCardProps) {
  return (
    <div
      className={`relative rounded-xl border-3 border-brutal-red/30 overflow-hidden ${
        fillParent ? 'flex flex-col flex-1' : ''
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
            <div className="absolute inset-0 bg-black/70 rounded-t-lg z-0" />
            <div className="absolute inset-0 bg-brutal-red/10 backdrop-blur-lg rounded-t-lg z-10 border-brutal-red/50 border-b-2" />
            <h2 className="relative z-20 py-6 px-8 text-2xl md:text-3xl text-foreground text-center tracking-wider uppercase">
              {title}
            </h2>
          </div>
        )}

        <div
          className={`relative z-10 p-8 flex-1 ${
            !background ? 'bg-background/70 rounded-b-lg shadow-[inset_0_2px_20px_rgba(0,0,0,0.3)]' : ''
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
