

declare global {
  function resolveMomentumModal(name: any): any;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: App.Data.UserData;
    };
};
