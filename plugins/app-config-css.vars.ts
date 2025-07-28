export default defineNuxtPlugin((nuxtApp) => {
    const config = useAppConfig();

    const cssVars = `
    :root {
      --primary-color: ${config.ui.colors.primary};
      --secondary-color: ${config.ui.colors.secondary};
    }
  `;

    // Inject the CSS into the <head> during SSR
    nuxtApp.hook('app:rendered', ({ ssrContext }) => {
        ssrContext?.head?.push?.({
            type: 'style',
            children: cssVars,
        });
    });

    if (import.meta.client) {
        const style = document.createElement('style');
        style.innerHTML = cssVars;
        document.head.appendChild(style);
    }
});
