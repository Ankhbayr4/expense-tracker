import { RecordIcon } from "./RecordIcon";
import moment from "moment";

const Record = (props) => {
  const { description, time, money, categoryId, type } = props;

  const moneyColor = type === "inc" ? "green" : "red";
  const formattedMoney = type === "inc" ? `+${money}` : `-${money}`;
  const formattedTime = moment(time).format("lll");
  return (
    <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between flex rounded-xl">
      <div className="flex gap-4">
        <RecordIcon categoryId={categoryId} />

        <div className="flex flex-col">
          <p className="font-normal text-base">{description}</p>
          <p className="font-normal text-xs text-[#6B7280]">{formattedTime}</p>
        </div>
      </div>
      <p className={`font-semibold text-base text-${moneyColor}-500`}>
        {formattedMoney}
      </p>
    </div>
  );
};

export default Record;
