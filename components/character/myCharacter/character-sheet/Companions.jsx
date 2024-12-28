import CustomButton from "@/components/ui/custom-button";
import Edit from "@/components/ui/Icons/Edit";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Loader from "@/components/ui/Loader";
import NoCompanions from "@/components/ui/Shared/Placeholder/character";
import Delete from "@/components/ui/Icons/Delete";
import { deleteCharacterCompanion } from "@/actions/character";
import useUserStore from "@/utils/userStore";
import useCustomToast from "@/hooks/useCustomToast";
import DeleteCompanion from "@/components/ui/Shared/Dialogue/DeleteCompanion";

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
  characterId,
  setCharacter,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { invokeToast } = useCustomToast();
  const { user } = useUserStore();

  const handleDeleteCompanion = async () => {
    if (!isCreator) {
      invokeToast("You are not authorized to delete this character", "error");
      return;
    }
    try {
      const updatedcharacter = await deleteCharacterCompanion(
        characterId,
        title,
        user?.token
      );
      setCharacter(updatedcharacter);
      invokeToast("Character deleted successfully", "success");
    } catch (e) {
      console.error("Error:", e);
      invokeToast("An error occurred while processing your request", "error");
    }
  };

  return (
    <div className='flex w-full col-span-4 rounded-[16px]  bg-white/10 border border-white/10  items-start justify-center flex-col   '>
      <div className='flex flex-col md:flex-row border-b border-white/10'>
        <div className=' w-full border-b lg:border-b-0 lg:border-r flex flex-col h-full p-5 pt-4 gap-4 border-white/10'>
          <h3 className='running-text-large break-words '>{title}</h3>
          <div className='relative overflow-hidden w-full'>
            {loadingAvatar && selectedCompanion.name === title && (
              <Loader
                text='Weaving illusions...'
                className='absolute top-0 left-0 rounded-[10px] w-full h-full bg-blur flex items-center justify-center'
              />
            )}
            <img
              src={
                primaryImage ||
                "/images/CreateCharacter/CharacterName/CharacterName.png"
              }
              alt={title}
              className=' lg:h-[182px] lg:min-w-[193px] rounded-[10px]   object-cover '
            />
          </div>
        </div>
        <div className='flex w-full flex-col justify-start p-5 pt-3.5 gap-4'>
          <span className='running-text-large'>Appearance</span>
          <p className='running-text text-gray2'>{description}</p>
        </div>
      </div>
      {isCreator && (
        <div className='flex flex-col lg:flex-row items-center  justify-center gap-4 p-6 w-full'>
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
            className={"w-full lg:w-fit"}
          >
            <Edit className={"h-5 w-5 fill-white opacity-70  "} />
            Change Image
          </CustomButton>
          <DeleteCompanion action={handleDeleteCompanion}>
            <CustomButton className={"w-full lg:w-fit"}>
              <Delete className={"h-5 w-5 fill-errorRed  "} />
              Delete Companion
            </CustomButton>
          </DeleteCompanion>
        </div>
      )}
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
  setCharacter,
}) {
  if (character?.companions?.length <= 0)
    return (
      <NoCompanions
        className={" left-1/2 -translate-x-1/2 -translate-y-1/4  "}
        isCompanion={true}
        character={character}
      />
    );
  return (
    <div className='relative  grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-5 '>
      {character?.companions?.map((companion, index) => (
        <Card
          characterId={character._id}
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
          setCharacter={setCharacter}
        />
      ))}
    </div>
  );
}
