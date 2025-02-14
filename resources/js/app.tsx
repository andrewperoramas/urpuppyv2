
 import '../sass/app.scss';
 import { createInertiaApp, router } from '@inertiajs/react';
 import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
 import { createRoot, hydrateRoot } from 'react-dom/client';
import { PuppyToaster } from './Components/PuppyToaster';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

 router.on('error', (errors: any) => {
   console.log(errors)

   if (errors?.response.status === 422) {
    router.reload({ only: ['errors'] });
  } else if (errors?.response.status === 500) {
    // Handle server errors
  } else {
    setTimeout(() => {
      router.reload();
    }, 1000); // Increase the timeout to 1 second
  }

 })

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }

       createRoot(el).render(            <>  <PuppyToaster max={3} /><App {...props} /> </>);
    },
     progress: {
        color: 'var(--bs-primary)',
        delay: 250,
    },

});
