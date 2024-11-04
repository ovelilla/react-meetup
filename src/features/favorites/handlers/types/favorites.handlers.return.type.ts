type FavoritesHandlersReturnType = {
  handleAddToFavorites: (id: string) => void;
  handleFetchMeetups: VoidFunction;
  handleRemoveFromFavorites: (id: string) => void;
};

export type { FavoritesHandlersReturnType };
