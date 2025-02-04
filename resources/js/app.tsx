
 import '../sass/app.scss';
 import { createInertiaApp, router } from '@inertiajs/react';
 import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
 import { createRoot, hydrateRoot } from 'react-dom/client';
import { PuppyToaster } from './Components/PuppyToaster';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

 // router.on('error', (errors: any) => {
 //      if (errors.some((error: any) => error.message.includes('window.history.state is null'))) {
 //        console.warn('Refreshing page due to Inertia error.');
 //        window.location.reload();
 //    }
 //    window.location.reload();
 // })

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
