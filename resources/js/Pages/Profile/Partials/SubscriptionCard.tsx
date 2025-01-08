import { Link } from '@inertiajs/react'
import React from 'react'

const SubscriptionCard = ({plan, next_billing} : {
    plan: App.Data.PlanData
    next_billing?: string
}) => {
  return (

                <div className="card border">
                  <div className="card-body">
                    <h5 className="mb-13 pb-13 border-bottom fs-7">Current Plan</h5>
                    <div className="pb-13 mb-13 border-bottom d-md-flex align-items-start justify-content-between">
                      <div className="mb-3 mb-md-0">
                        <div className="d-flex align-items-center gap-6 mb-3">
                          <img src={plan.logo ?? ''} alt="" width="48" height="48" />
                          <p className="text-dark fs-5 mb-0">{plan.name}</p>
                        </div>
                        <h2 className="mb-2">{plan.money_formatted}<span className="fs-5 text-muted">/{plan.plan_days}</span></h2>
                                                <>

                        <p className="mb-0 text-dark">Next Billing Date: {next_billing}</p>
</>

                      </div>
                      <div>
                        <a className="btn btn-primary d-block mb-6" href="subscription-plans.html">Upgrade Plan</a>
                        <Link data-bs-toggle="modal" data-bs-target="#CancelPlan"
                          className="btn btn-outline-extralight border btn-white text-dark d-block" method="delete"  href={`/subscriptions`}>Cancel Plan</Link>
                      </div>
                    </div>
                    <div className="features">
                      <p>Features:</p>
                      <ul className="list-unstyled mb-0 d-flex flex-column gap-6">
                        {
                                                            plan.features.map((feature : any, index) => (

                        <li className="d-flex align-items-start gap-2">
                          <img src="../images/svgs/icon-check-filled.svg" alt="" className="flex-shrink-0" />
                          <h5 className="fs-3 mb-0 font-work-sans fw-normal">{feature.name}</h5>
                        </li>
                                                            ))
                                                        }
                      </ul>
                    </div>
                  </div>
                </div>
    )}

export default SubscriptionCard
