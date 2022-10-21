import { useEngineers } from "../../../../hooks/useEngineers";
import { ListEngineerPresenter } from "./ListEngineerPresenter";

export const ListEngineerContainer = () => {
  const { engineers } = useEngineers();

  return <ListEngineerPresenter engineers={engineers} />;
};
