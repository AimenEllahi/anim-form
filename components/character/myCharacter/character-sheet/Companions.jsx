import CustomButton from "@/components/ui/custom-button";
import Edit from "@/components/ui/Icons/Edit";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Loader from "@/components/ui/Loader";
import NoCompanions from "@/components/ui/Shared/Placeholder/character";

//card
const Card = ({
  title,
  description,
  images,
  isCreator,
  primaryImage,
  setOpen,
  setSelectedCompanion,
  selectedCompanion,
  loadingAvatar,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex  col-span-4 rounded-[16px]  bg-white/10 border border-white/10  items-start justify-center flex-col md:flex-row  ">
      <div className="border-b md:border-b-0 md:border-r flex flex-col h-full p-5 pt-4 gap-4 border-white/10">
        <h3 className="running-text-large break-all max-w-full ">{title}</h3>
        <div className="relative overflow-hidden">
          {loadingAvatar && selectedCompanion.name === title && (
            <Loader
              text="Weaving illusions..."
              className="absolute top-0 left-0 rounded-[10px] w-full h-full bg-blur flex items-center justify-center"
            />
          )}
          <img
            src={
              primaryImage ||
              "/images/CreateCharacter/CharacterName/CharacterName.png"
            }
            alt={title}
            className=" md:h-[182px] md:min-w-[193px] rounded-[10px]   object-cover "
          />
        </div>
        {isCreator && (
          <CustomButton
            onClick={() => {
              setOpen(true);
              setSelectedCompanion({
                name: title,
                appearance: description,
                portraits: images,
                selectedPortrait: primaryImage,
              });

              let url = pathname + "?companion=true";
              if (images.length <= 0) {
                url += "&generateAvatar=true";
              }
              router.push(url);
            }}
            disabled={loadingAvatar}
            withIcon={true}
            className={"mt-1"}
          >
            <Edit className={"h-5 w-5 fill-white opacity-70 "} />
            Change Image
          </CustomButton>
        )}
      </div>
      <div className="flex flex-col justify-start p-5 pt-3.5 gap-4">
        <span className="running-text-large">Appearance</span>
        <p className="running-text text-gray2">{description}</p>
      </div>
    </div>
  );
};
export default function Companions({
  character,
  isCreator,
  setOpen,
  setSelectedCompanion,
  loadingAvatar,
  selectedCompanion,
}) {
  if (character?.companions?.length <= 0)
    return (
      <NoCompanions
        className={" left-1/2 -translate-x-1/2  "}
        isCompanion={true}
        character={character}
      />
    );
  return (
    <div className="relative  grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-5 ">
      {character?.companions?.map((companion, index) => (
        <Card
          key={index}
          title={companion.name}
          description={companion.appearance}
          images={companion?.images || []}
          primaryImage={companion.primaryImage}
          isCreator={isCreator}
          setOpen={setOpen}
          loadingAvatar={loadingAvatar}
          selectedCompanion={selectedCompanion}
          setSelectedCompanion={setSelectedCompanion}
        />
      ))}
    </div>
  );
}
