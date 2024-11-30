declare namespace App.Data {
export type BreederData = {
name: string;
gender: string;
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
title: string;
slug: string;
gender: string;
breed: string;
image: string;
description: string;
price: number;
birth_date: string;
status: any;
breeder: App.Data.BreederData;
};
}
declare namespace App.Enum {
export type Gender = 'male' | 'female';
export type PuppyStatus = 'draft' | 'published';
}
