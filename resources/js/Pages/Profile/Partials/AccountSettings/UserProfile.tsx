import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'
import AvatarInput from './UserAvatar'
import PrimaryButton from '@/Components/PrimaryButton'
import Button from '@/Components/ui/Button'
import InputError from '@/Components/InputError'

const UserProfile = () => {

    const user = usePage().props.auth.user
    console.log(user)
    console.log('gagika')

    const { patch, data, setData, errors } = useForm<{ first_name: string, last_name: string, email: string, avatar: File | null,
        current_password?: string, new_password?: string, new_password_confirmation?: string

    }>({
        first_name: user?.first_name ?? "",
        last_name: user?.last_name ?? "",
        email: user?.email ?? "",
        avatar: null,
        current_password: '',
        new_password: '',
        new_password_confirmation: '',
    });

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        patch('/profile');
    };


    console.log(data)

  return (
                <form action="" onSubmit={handleSubmit}>
                  <div className="card border">
                    <div className="card-body">
                      <div className="pb-4 mb-4 border-bottom">
                        <h5 className="mb-4 fs-7">Profile Picture</h5>
                        <AvatarInput
                             onChange={(e) =>
    setData((prevData) => ({
      ...prevData,
      avatar: e.target.files![0],
    }))
  }
                        />

                      </div>
                      <div className="pb-4 mb-4 border-bottom">
                        <h5 className="mb-4 fs-7">Account Details</h5>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3 pb-1">
                              <InputLabel value="First Name"  />
                              <TextInput placeholder="First Name" onChange={e => setData('first_name', e.target.value)}  value={data.first_name}/>
 {                                errors.first_name &&
                                <InputError message={errors.first_name} />
                                    }
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3 pb-1">
                              <InputLabel value="Last Name"  />
                              <TextInput placeholder="Last Name" onChange={e => setData('last_name', e.target.value)} value={data.last_name} />
 {                                errors.last_name &&
                                <InputError message={errors.last_name} />
                                    }
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="">
                              <InputLabel value="Email"  />
                              <TextInput type="email" onChange={e => setData('email', e.target.value)} placeholder="Email" value={data.email} />
 {                                errors.email &&
                                <InputError message={errors.email} />
                                    }
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-4 mb-4 border-bottom">
                        <h5 className="mb-4 fs-7">Change Password</h5>
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-3 pb-1">
                              <InputLabel value="Current Password"  />
                              <TextInput onChange={e => setData('current_password', e.target.value)} type="password" placeholder="**********"/>
                                    {
                                   errors.current_password &&
                                <InputError message={errors.current_password} />
                                    }
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-3 pb-1">
                              <InputLabel value="New Password"  />
                              <TextInput onChange={e => setData('new_password', e.target.value)} type="password"  placeholder="**********"/>
                                    {
                                   errors.new_password &&
                                <InputError message={errors.new_password} />
                                    }
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="">
                              <InputLabel value="Confirm Password"  />
                              <TextInput onChange={e => setData('new_password_confirmation', e.target.value)} type="password" placeholder="**********"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-4 mb-4 border-bottom">
                        <h5 className="mb-3 pb-1 fs-7">Manage Account</h5>
                        <div className="d-md-flex align-items-center justify-content-between gap-4">
                          <div className="mb-3 mb-md-0">
                            <h6 className="mb-0 fs-4 font-work-sans">Delete Account</h6>
                            <p className="mb-0">Permanently delete your urpuppy.com account.</p>
                          </div>
                          <a className="btn btn-outline-extralight border btn-white text-dark" href="#">Delete Account</a>
                        </div>
                      </div>
                      <div className="">
                        <h5 className="mb-3 pb-1 fs-7">Notifications</h5>
                        <div className="d-md-flex align-items-center justify-content-between gap-4">
                          <div className="mb-3 mb-md-0">
                            <h6 className="mb-0 fs-4 font-work-sans">Account Notifications</h6>
                            <p className="mb-0">We will send you notifications to inform you of any updates and/or changes
                              as events occur for you</p>
                          </div>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                              checked />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            <Button href="#" type="button" variant="primary">Update Settings</Button>
                </form>

  )
}

export default UserProfile
