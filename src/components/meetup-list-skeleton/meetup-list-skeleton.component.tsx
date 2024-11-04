// Components
import { MeetupItemSkeletonComponent } from "./components/meetup-item-skeleton/meetup-item-skeleton.component";
// Types
import { MeetupListSkeletonComponentPropsType } from "./types/meetup-list-skeleton.component.props.type";
const MeetupListSkeletonComponent = ({
  count,
}: MeetupListSkeletonComponentPropsType) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
    {[...Array(count)].map((_, index) => (
      <MeetupItemSkeletonComponent key={index} />
    ))}
  </div>
);

export { MeetupListSkeletonComponent };
