import { PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Layout from '@/Layouts/Layout';
import ListPill from '@/Components/ListPill';
import SubscriptionCard from './Partials/SubscriptionCard';
import UserProfile from './Partials/AccountSettings/UserProfile';
import MyPuppies from './MyPuppies';
import { PaginatedCollection } from '@/types/global';
import SavedSearchCard from '@/Components/SavedSearchCard';
import { useEffect, useState } from 'react';

const NavigationSettings = [
    {  name: 'Account Settings', href: '#pills-account-settings', id: 'pills-account-settings-tab', logo: '../images/svgs/icon-user-dark.svg' },
    {  name: 'My Subscription', href: '#pills-my-subscription', id: 'pills-my-subscription-tab', logo: '../images/svgs/icon-card.svg' },
    {  name: 'Saved Search', href: '#pills-saved-search', id: 'pills-saved-search-tab', logo: '../images/svgs/icon-bookmarks.svg' },
    {  name: 'My Puppies', href: '#pills-my-puppies', id: 'pills-my-puppies-tab', logo: '../images/svgs/icon-paws-dark.svg' },
]

export default function Edit({
    mustVerifyEmail,
    status,
    plan,
    breeder_plan,
    puppies,
    saved_searches,
    plan_next_billing,
    plan_cancel_at,

    breeder_next_billing,
    breeder_cancel_at,
    tab
}: PageProps<{ mustVerifyEmail: boolean;
        plan_cancel_at: boolean;
        plan_next_billing: string,
        breeder_cancel_at: boolean;
        breeder_next_billing: string,
        status?: string, plan: App.Data.PlanData,  breeder_plan: App.Data.PlanData,  tab: string, puppies: PaginatedCollection<App.Data.PuppyData>, saved_searches: App.Data.SavedSearchData[] }>) {

    // const redirect_tab = usePage().props.redirect_tab as any ?? 'Account Settings';

    const [currentTab, setCurrentTab] = useState(tab ?? 'Account Settings')

    // // console.log(saved_searches)
    // useEffect(() => {
    //     setCurrentTab(redirect_tab)
    // }, [
    //         redirect_tab
    //     ])

    return (
        <Layout
            navType="secondary"
        >

              <div className="page-wrapper position-relative overflow-hidden">

    <section className="account-settings py-7 py-md-5 py-xl-9">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-pills justify-content-center flex-lg-column gap-2 mb-4 mb-lg-0" id="pills-tab"
              role="tablist">
                {NavigationSettings.map((item, index) => (
                    <ListPill tab={tab} key={index} name={item.name} logo={item.logo} href={item.href}  />

                ))}
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="pills-tabContent">
              <div className={` tab-pane fade  ${currentTab == 'Account Settings' ? 'show active' : ''} `} id="pills-account-settings" role="tabpanel"
                aria-labelledby="pills-account-settings-tab" tabIndex={0}>
                 <UserProfile />

              </div>
              <div className={` tab-pane fade ${currentTab == 'My Subscription' ? 'show active' : ''} `}  id="pills-my-subscription" role="tabpanel"
                aria-labelledby="pills-my-subscription-tab" tabIndex={0}>
                    {plan ? <SubscriptionCard next_billing={plan_next_billing} cancel_at={plan_cancel_at}  plan={plan}/> : ""}
                    {breeder_plan && <SubscriptionCard next_billing={breeder_next_billing} cancel_at={breeder_cancel_at}  plan={breeder_plan}/> }

              </div>
              <div className={` tab-pane fade ${currentTab == 'Saved Search' ? 'show active' : ''} `} id="pills-saved-search" role="tabpanel"
                aria-labelledby="pills-saved-search-tab" tabIndex={0}>
                <div className="card border">
                  <div className="card-body pb-0">
                    <div className="row">
                    {saved_searches.length > 0 && saved_searches.map((saved_search: App.Data.SavedSearchData, index: number) => (
                                                        <div className="col-md-6 col-xx-4">
                        <SavedSearchCard saved_search={saved_search} />
                                                        </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={` tab-pane fade ${currentTab == 'My Puppies' ? 'show active' : ''} `} id="pills-my-puppies" role="tabpanel"
                aria-labelledby="pills-my-puppies-tab" tabIndex={0}>
                <div className="card border">
                  <div className="card-body pb-0">
                    <MyPuppies puppies={puppies}/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  </div>


            {/**

            <div className="py-2">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
*/}

        </Layout>
    );
}
