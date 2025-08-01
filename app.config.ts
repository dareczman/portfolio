export default defineAppConfig({
  ui: {
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8',
    },
    colors: {
      primary: 'emerald',
      secondary: 'rose',
      active: 'green',
    },
    formField: {
      slots: {
        label: 'dark:text-black',
      },
    },
  },
});
