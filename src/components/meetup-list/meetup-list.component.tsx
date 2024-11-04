// Components
import { MeetupItemComponent } from "./components/meetup-item/meetup-item.component";
// Types
import { MeetupListComponentPropsType } from "./types/meetup-list.component.props.type";

const MeetupListComponent = ({
  meetups,
  onAddToFavorites,
  onRemoveFromFavorites,
}: MeetupListComponentPropsType) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
    {meetups.map((meetup) => (
      <MeetupItemComponent
        key={meetup.id}
        {...{
          ...meetup,
          onAddToFavorites,
          onRemoveFromFavorites,
        }}
      />
    ))}
  </div>
);

export { MeetupListComponent };
