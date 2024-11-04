// Vendors
import { create } from "zustand";
import { persist } from "zustand/middleware";
// Types
import { Meetup } from "types/meetup.type";
import { MeetupSchemaType } from "@/pages/add-meetup/schemas/add-meetup.schema";

type MeetupsStoreType = {
  meetups: Meetup[];
  addFavorite: (id: string) => void;
  addMeetup: (meetup: MeetupSchemaType) => void;
  getFavorites: () => Meetup[];
  getMeetups: () => Meetup[];
  removeFavorite: (id: string) => void;
  setMeetups: (meetups: Meetup[]) => void;
};

const useMeetupsStore = create<MeetupsStoreType>()(
  persist(
    (set, get) => ({
      meetups: [],
      addFavorite: (id: string) => {
        set({
          meetups: get().meetups.map((meetup) =>
            meetup.id === id ? { ...meetup, isFavorite: true } : meetup,
          ),
        });
      },
      addMeetup: (data: MeetupSchemaType): void => {
        const lastMeetup = get().meetups[get().meetups.length - 1];
        const lastMeetupId = lastMeetup ? lastMeetup.id : "m1";
        const newMeetup = {
          ...data,
          id: `m${parseInt(lastMeetupId.slice(1)) + 1}`,
          isFavorite: false,
        };
        set({ meetups: [...get().meetups, newMeetup] });
      },
      getFavorites: () => get().meetups.filter((meetup) => meetup.isFavorite),
      getMeetups: () => get().meetups,
      removeFavorite: (id: string) => {
        set({
          meetups: get().meetups.map((meetup) =>
            meetup.id === id ? { ...meetup, isFavorite: false } : meetup,
          ),
        });
      },
      setMeetups: (meetups) => {
        const persistedMeetups = get().meetups;
        const newMeetups = meetups.map((meetup) => {
          const existingMeetup = persistedMeetups.find(
            (persisted) => persisted.id === meetup.id,
          );
          return {
            ...meetup,
            isFavorite: existingMeetup ? existingMeetup.isFavorite : false,
          };
        });
        set({ meetups: newMeetups });
      },
    }),
    {
      name: "meetups",
    },
  ),
);

export { useMeetupsStore };
