import { usePodStats } from "@/hooks/usePodStats";
import PodItem from "@/components/podItem";

export default function PodOnlineStatus() {
  const { podStats } = usePodStats();
  const { pod = [] } = podStats || {};

  return (
    <div className="mb-4 p-4 bg-white shadow-md shadow-slate-400 rounded-xl">
      <h3 className="text-xl mb-4">Pod Online Status</h3>
      <div className="flex flex-row flex-wrap justify-evenly gap-4">
        {pod.map((locationPod, index) => {
          return (
            <div
              key={`${locationPod.locationName}-${index}`}
              className="flex-auto"
            >
              <div>{locationPod.locationName}</div>
              <hr />
              <div>
                {locationPod.pods?.map((podItem, index) => (
                  <PodItem key={`${podItem.podName}-${index}`} pod={podItem} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
