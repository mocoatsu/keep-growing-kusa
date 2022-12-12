import { useDisclosure } from "@chakra-ui/react";
import { useAchievements } from "../../../hooks/useAchievements";
import { useUnlockAchievements } from "../../../hooks/useUnlockAchievements";
import { Modal } from "../../atomsAndMolecules/Modal";
import { AchievementPresenter } from "./AchievementPresenter";

export const AchievementContainer = () => {
  const { achievements } = useAchievements();
  const { newUnlockedAchievements, unlockedAchievements } =
    useUnlockAchievements();
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <AchievementPresenter achievements={achievements}></AchievementPresenter>
      {newUnlockedAchievements.length > 0 && (
        <Modal
          label="実績解除"
          content="解除実績"
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};
