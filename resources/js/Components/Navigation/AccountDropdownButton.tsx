import { Link } from '@inertiajs/react'
import React from 'react'

const AccountDropdownButton = ({user} : { user: App.Data.UserData }) => {
  return (

      <div className="dropdown position-relative user-profile-dropdown">
            <a className="btn btn-primary p-0 round-44 overflow-hidden rounded-circle d-flex align-items-center justify-content-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img className="w-100 h-100" src={user.avatar} alt="" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end p-3" style={{
                                width: 'max-content'
                        }} >
              <div className="border-bottom pb-2">
                <h5 className="mb-0">User Profile</h5>
              </div>
              <div className="d-flex align-items-center gap-6 my-4">
                <span className="rounded-circle overflow-hidden flex-shrink-0">
                  <img src={user.avatar} alt="" width="50" height="50" />
                </span>
                <div>
                  <h6 className="mb-0">{user.full_name}</h6>
                  <p className="mb-0 fs-2 d-flex align-items-center gap-2">
                    <img src="/images/svgs/icon-mail-dark.svg" alt="" width="14" />
                    <a className="text-muted" href="mailto:support@urpuppy.com">{user.email}</a>
                  </p>
                </div>
              </div>
              <li><Link prefetch className="dropdown-item rounded py-2" href="/profile">Settings</Link></li>
              <li><Link className="dropdown-item rounded py-2" href="/profile" data={{
                    tab: 'My Subscription'
                }}>My Subscriptions</Link></li>
              <li><Link className="dropdown-item rounded py-2" href="/profile" data={{
                    tab: 'Saved Search'
                }} >Saved Search</Link></li>
              <li><Link className="dropdown-item rounded py-2" href="/profile" data={{
                    tab: 'My Puppies'
                }} >My Puppies</Link></li>
              <div className="mt-3">
                                                                        <Link
                                                                            method="post"
                                                                            as="button"
                                                                            href="/logout"
                                                                            className="btn btn-primary d-block w-100"
                                                                        >
                                                                            Logout
                                                                        </Link>
              </div>
            </ul>
            </div>
  )
}

export default AccountDropdownButton
