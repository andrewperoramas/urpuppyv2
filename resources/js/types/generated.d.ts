declare namespace App.Data {
export type BreedData = {
name: string;
slug: string;
image: string;
};
export type BreedDataCollection = {
name: string;
};
export type BreedFullData = {
name: string;
slug: string;
image: string;
history_description: string | null;
size_description: string | null;
coat_description: string | null;
temperament_description: string | null;
lifestyle_description: string | null;
activities_description: string | null;
};
export type BreedOptionData = {
value: number;
label: string;
};
export type BreederData = {
full_name: string;
avatar: string;
slug: string;
address: string;
member_since: string;
breeds: Array<App.Data.BreedDataCollection> | null;
};
export type BreederFullData = {
id: number;
full_name: string;
first_name: string;
avatar: string;
slug: string;
address: string;
member_since: string;
company_name: string | null;
company_address: string | null;
company_established_on_label: string | null;
website: string | null;
phone: string | null;
email: string;
social_fb: string | null;
social_tiktok: string | null;
social_x: string | null;
social_ig: string | null;
description: string | null;
breeds: Array<any>;
comments: Array<App.Data.CommentData> | null;
};
export type CityData = {
id: number;
name: string;
};
export type ColorData = {
value: number;
label: string;
};
export type CommentData = {
rating: number;
body: string;
reviewer: App.Data.UserCommentData;
review_on: string;
};
export type PatternData = {
value: number;
label: string;
};
export type PlanData = {
id: number;
name: string;
price: string;
money_formatted: string;
savings_label: string;
trial_days: number;
interval: string;
type: string;
is_highlight: string;
plan_days: string;
logo: string | null;
interval_count: number;
details: Array<App.Data.PlanDetail> | null;
features: Array<string>;
badge_color: string;
badge_title: string;
};
export type PlanDetail = {
name: string;
count: number;
};
export type PlanFeature = {
name: string;
active: boolean;
};
export type PriceData = {
amount: number;
currency: string;
formatted: string;
};
export type PuppyColorData = {
color: string;
name: string;
};
export type PuppyData = {
id: number;
name: string;
slug: string;
gender: string;
is_favorite: boolean | null;
breeds: Array<App.Data.BreedData>;
image: string;
preview_images: Array<string>;
description: string;
formatted_price: string;
patterns: string;
view_count: number;
age: string;
breeder: App.Data.BreederData;
puppy_colors: Array<App.Data.PuppyColorData> | null;
published_at: string | null;
};
export type PuppyPatternData = {
amount: number;
currency: string;
formatted: string;
};
export type PuppySiblingData = {
id: number;
name: string;
slug: string;
image: string;
gender: string;
};
export type SiblingData = {
value: number;
label: string;
};
export type StateData = {
id: number;
name: string;
};
export type UserCommentData = {
full_name: string;
avatar: string;
};
export type UserData = {
full_name: string;
first_name: string;
last_name: string;
avatar: string;
slug: string;
email: string;
city: App.Data.CityData;
state: App.Data.StateData;
address: string;
email_verified_at: string | null;
member_since: string;
};
}
declare namespace App.Enum {
export type Gender = 'male' | 'female';
export type PuppyStatus = 'draft' | 'published';
}
