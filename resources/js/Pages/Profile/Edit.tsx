import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Layout from '@/Layouts/Layout';
import ListPill from '@/Components/ListPill';
import SubscriptionCard from './Partials/SubscriptionCard';
import UserProfile from './Partials/AccountSettings/UserProfile';

const NavigationSettings = [
    {  name: 'Account Settings', href: '#pills-account-settings', id: 'pills-account-settings-tab', logo: '../images/svgs/icon-user-dark.svg' },
    {  name: 'My Subscription', href: '#pills-my-subscription', id: 'pills-my-subscription-tab', logo: '../images/svgs/icon-card.svg' },
    {  name: 'Saved Search', href: '#pills-saved-search', id: 'pills-saved-search-tab', logo: '../images/svgs/icon-bookmarks.svg' },
]

export default function Edit({
    mustVerifyEmail,
    status,
    plan,
    next_billing,
    tab
}: PageProps<{ mustVerifyEmail: boolean; status?: string, plan: App.Data.PlanData, next_billing: string, tab: string}>) {


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
              <div className={` tab-pane fade  ${tab == 'Account Settings' ? 'show active' : ''} `} id="pills-account-settings" role="tabpanel"
                aria-labelledby="pills-account-settings-tab" tabIndex={0}>
                 <UserProfile />

              </div>
              <div className={` tab-pane fade ${tab == 'My Subscription' ? 'show active' : ''} `}  id="pills-my-subscription" role="tabpanel"
                aria-labelledby="pills-my-subscription-tab" tabIndex={0}>
                    {plan ? <SubscriptionCard next_billing={next_billing}  plan={plan}/> : "You have not subscribed to any plan yet."}

              </div>
              <div className={` tab-pane fade ${tab == 'Saved Search' ? 'show active' : ''} `} id="pills-saved-search" role="tabpanel"
                aria-labelledby="pills-saved-search-tab" tabIndex={0}>
                <div className="card border">
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-md-6 col-xxl-4">
                        <div className="card border">
                          <div className="card-body">
                            <h6 className="mb-4">December 31, 2024 at 1:02 am</h6>
                            <div className="d-flex align-items-center gap-6">
                              <a className="btn btn-primary fs-2" href="results.html">View Search</a>
                              <a className="btn btn-outline-extralight border btn-white text-dark fs-2" href="#">Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xxl-4">
                        <div className="card border">
                          <div className="card-body">
                            <h6 className="mb-4">December 31, 2024 at 1:02 am</h6>
                            <div className="d-flex align-items-center gap-6">
                              <a className="btn btn-primary fs-2" href="results.html">View Search</a>
                              <a className="btn btn-outline-extralight border btn-white text-dark fs-2" href="#">Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xxl-4">
                        <div className="card border">
                          <div className="card-body">
                            <h6 className="mb-4">December 31, 2024 at 1:02 am</h6>
                            <div className="d-flex align-items-center gap-6">
                              <a className="btn btn-primary fs-2" href="results.html">View Search</a>
                              <a className="btn btn-outline-extralight border btn-white text-dark fs-2" href="#">Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
