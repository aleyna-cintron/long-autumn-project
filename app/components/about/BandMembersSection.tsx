import BandMemberCard from '../ui/BandMemberCard'
import { bandMembers } from '../../../types/bandMembers';
import GrayscaleCosmicBg from '../ui/GrayscaleCosmicBg';

export default function BandMembersSection() {
  return (
    <div className="flex flex-col gap-32 w-full">
      {bandMembers.map((member, index) => {
        const isLeft = member.variant === 'left';

        return (
          <div key={member.name} className="relative w-full p-20">
            <div className="bg-background/70 backdrop-blur-sm rounded-lg border-2 border-accent/30 overflow-hidden p-20 ">
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-accent/30 border-2 py-6 px-8 p-20 rounded-lg  ">
              <GrayscaleCosmicBg></GrayscaleCosmicBg>  
              {isLeft && (
                <>
                  <div className="lg:col-span-7 relative">
                    <Decor variant="left" />
                    <BandMemberCard {...member} />
                  </div>
                  <Number index={index} align="right"/>
                </>
              )}

              {!isLeft && (
                <>
                  <Number index={index} align="left" />
                  <div className="lg:col-span-7 relative">
                    <Decor variant="right" />
                    <BandMemberCard {...member} />
                  </div>
                </>
                )}
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Number({ index, align }: { index: number; align: 'left' | 'right' }) {
  return (
    <div
      className={`lg:col-span-5 flex items-center ${
        align === 'right' ? 'justify-end' : ''
      }`}
    >
      <div className="text-9xl font-bold text-brutal-red select-none drop-shadow-2xl">
        {String(index + 1).padStart(2, '0')}
      </div>
    </div>
  );
}

function Decor({ variant }: { variant: 'left' | 'right' }) {
  return (
    <div
      className={`absolute w-full h-full rounded-lg border-2 border-brutal-red shadow-lg shadow-brutal-red/20
        ${variant === 'left' ? '-top-4 -left-4' : '-top-4 -right-4'}`}
    />
  );
}