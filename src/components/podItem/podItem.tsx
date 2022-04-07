import { Pod } from "@/types/dashboard";
import { StatusLed } from "./podItem.styles";

type Props = {
  pod: Pod;
};

export default function PodItem({ pod }: Props) {
  const { podOnlineStatus, podName } = pod;
  return (
    <div className="flex flex-row gap-4 items-center">
      <StatusLed active={podOnlineStatus} />
      <span className="text-neutral-600">{podName}</span>
    </div>
  );
}
