// Types
import { MeetupItemComponentPropsType } from "./types/meetup-item.component.props.type";

const MeetupItemComponent = ({
  address,
  description,
  id,
  image,
  isFavorite,
  onAddToFavorites,
  onRemoveFromFavorites,
  title,
}: MeetupItemComponentPropsType) => (
  <article className="flex flex-col overflow-hidden rounded-lg shadow-lg">
    <img src={image} alt={title} className="h-48 object-cover" />
    <div className="flex flex-1 flex-col items-center gap-8 bg-white p-4 md:p-6">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="italic">{address}</p>
        <p>{description}</p>
      </div>
      <button
        onClick={() =>
          isFavorite ? onRemoveFromFavorites(id) : onAddToFavorites(id)
        }
        className="mt-auto flex h-12 items-center justify-center rounded-lg border border-indigo-700 px-4 font-medium text-indigo-700 hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  </article>
);

export { MeetupItemComponent };
