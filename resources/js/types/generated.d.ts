declare namespace App.Data {
export type BreedData = {
first_name: string;
last_name: string;
slug: string;
};
export type BreederData = {
first_name: string;
last_name: string;
slug: string;
address: string;
};
export type PlanData = {
id: number;
name: string;
price: string;
trial_days: number;
interval: string;
interval_count: number;
details: Array<App.Data.PlanDetail>;
special_features: Array<App.Data.PlanFeature>;
};
export type PlanDetail = {
name: string;
count: number;
};
export type PlanFeature = {
name: string;
active: boolean;
};
export type PuppyData = {
name: string;
slug: string;
gender: string;
breeds: Array<App.Data.BreedData>;
image: string;
description: string;
price: any;
birth_date: string;
breeder: App.Data.BreederData;
};
}
declare namespace App.Enum {
export type Gender = 'male' | 'female';
export type PuppyStatus = 'draft' | 'published';
}
