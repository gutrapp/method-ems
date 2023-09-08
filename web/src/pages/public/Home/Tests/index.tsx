import { Default } from "./Default";
import { Mobile } from "./Mobile";

export const Tests = () => {
  return (
    <div>
      <div className="hidden xl:flex">
        <Default />
      </div>
      <div className="flex xl:hidden">
        <Mobile />
      </div>
    </div>
  );
};
