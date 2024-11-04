// Components
import { MeetupListComponent } from "@/components/meetup-list/meetup-list.component";
import { MeetupListSkeletonComponent } from "@/components/meetup-list-skeleton/meetup-list-skeleton.component";
// Hooks
import { AllMeetupsHook } from "./hooks/all-meetups.hook";

const AllMeetupsPage = () => {
  const { handleAddToFavorites, handleRemoveFromFavorites, loading, meetups } =
    AllMeetupsHook();

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl">All Meetups</h1>
      {loading ? (
        <MeetupListSkeletonComponent count={8} />
      ) : (
        <MeetupListComponent
          {...{
            meetups,
            onAddToFavorites: handleAddToFavorites,
            onRemoveFromFavorites: handleRemoveFromFavorites,
          }}
        />
      )}
    </section>
  );
};

export { AllMeetupsPage };
