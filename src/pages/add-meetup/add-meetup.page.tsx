// Hooks
import { AddMeetupsHook } from "./hooks/add-meetups.hook";

const AddMeetupPage = () => {
  const { errors, handleSubmit, handleSubmitEvent, loading, register } =
    AddMeetupsHook();

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl">Add Meetup</h1>

      <div className="flex max-w-2xl flex-col gap-4 rounded-md bg-white p-4 shadow-lg md:p-6">
        <form
          onSubmit={handleSubmit(handleSubmitEvent)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Meetup Title</label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="image">Meetup Image</label>
            <input
              type="text"
              id="image"
              {...register("image")}
              className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.image && (
              <p className="text-sm text-red-600">{errors.image.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              {...register("address")}
              className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.address && (
              <p className="text-sm text-red-600">{errors.address.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              {...register("description")}
              className="h-32 w-full rounded-md border border-gray-300 p-3 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
            {errors.description && (
              <p className="text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            disabled={loading}
            type="submit"
            className="flex h-12 items-center justify-center rounded-lg bg-indigo-700 px-4 font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Add Meetup
          </button>
        </form>
      </div>
    </section>
  );
};

export { AddMeetupPage };
