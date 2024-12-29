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
export type BreederData = {
full_name: string;
avatar: string;
slug: string;
address: string;
member_since: string;
breeds: Array<App.Data.BreedDataCollection> | null;
};
export type BreederFullData = {
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
export type CommentData = {
rating: number;
body: string;
reviewer: App.Data.UserCommentData;
review_on: string;
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
logo: string;
interval_count: number;
details: Array<App.Data.PlanDetail>;
special_features: Array<App.Data.PlanFeature>;
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
export type PuppyData = {
name: string;
slug: string;
gender: string;
breeds: Array<App.Data.BreedData>;
image: string;
preview_images: Array<string>;
description: string;
formatted_price: string;
view_count: number;
age: string;
breeder: App.Data.BreederData;
published_at: string | null;
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
avatar: string;
slug: string;
email: string;
address: string;
email_verified_at: string | null;
member_since: string;
};
}
declare namespace App.Enum {
export type Gender = 'male' | 'female';
export type PuppyStatus = 'draft' | 'published';
}
