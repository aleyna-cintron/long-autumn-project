import BandMemberCard from '../ui/BandMemberCard'
import { bandMembers } from '../../../types/bandMembers';

export default function BandMembersSection() {
  return (
    <div className="flex flex-col gap-32">
      {bandMembers.map((member, index) => {
        const isLeft = member.variant === 'left';

        return (
          <div key={member.name} className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {isLeft && (
                <>
                  <div className="lg:col-span-7 relative">
                    <Decor variant="left" />
                    <BandMemberCard {...member} />
                  </div>
                  <Number index={index} align="right" />
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
      <div className="text-9xl font-bold text-brutal-red opacity-20 select-none drop-shadow-2xl">
        {String(index + 1).padStart(2, '0')}
      </div>
    </div>
  );
}

function Decor({ variant }: { variant: 'left' | 'right' }) {
  return (
    <div
      className={`absolute w-full h-full rounded-lg opacity-30 border-2 border-brutal-red shadow-lg shadow-brutal-red/20
        ${variant === 'left' ? '-top-4 -left-4' : '-top-4 -right-4'}`}
    />
  );
}