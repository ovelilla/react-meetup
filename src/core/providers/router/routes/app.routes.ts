const appRoutes = {
  path: "/",
  async lazy() {
    const { AppLayout } = await import("core/layouts/app.layout");
    return { Component: AppLayout };
  },
  children: [
    {
      path: "/",
      async lazy() {
        const { AllMeetupsPage } = await import("pages/all-meetups/all-meetups.page");
        return { Component: AllMeetupsPage };
      },
    },
    {
      path: "/add-meetup",
      async lazy() {
        const { AddMeetupPage } = await import("pages/add-meetup/add-meetup.page");
        return { Component: AddMeetupPage };
      },
    },
    {
      path: "/favorites",
      async lazy() {
        const { FavoritesPage } = await import("pages/favorites/favorites.page");
        return { Component: FavoritesPage };
      },
    },
  ],
};

export { appRoutes };
