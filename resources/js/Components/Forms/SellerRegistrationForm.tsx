import React from 'react'
import TextInput from '../TextInput'
import InputLabel from '../InputLabel'
import IconInput from '../IconInput'
import SemiHeading from '../SemiHeading'
import YesOrNoRadioInput from '../YesOrNoRadioInput'
import { useForm } from '@inertiajs/react'
import Dropzone from 'react-dropzone'
import FileUpload from '../FileUpload'

const SellerRegistrationForm = () => {

   const { data, setData, post } = useForm({
    health_certificate: 'yes',
    vaccinated: 'yes',
    vet_exam: 'yes',
    travel_ready: 'yes',
    delivery_included: 'yes',
    are_you_a_breeder: 'yes',
   })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedData = {
        ...Object.fromEntries(formData.entries()),
        image_upload: formData.getAll('files')
    };

    setData((previous) => ({
        ...previous,
        ...updatedData,
    }));

    post('/seller/store');
};




  return (
                <form onSubmit={handleSubmit}>
          <div className="card border">
            <div className="card-body">
              <div className="contact-details border-bottom mb-4">
                <h6 className="fs-5 mb-3 pb-1">Contact Details</h6>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-4">
                     <InputLabel isRequired={true} value="First Name "/>
                     <TextInput />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel isRequired={true} value="Last Name"/>
                      <TextInput />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel isRequired={true} value="Email"/>
                      <TextInput type="email" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel isRequired={true} value="Phone"/>
                      <TextInput type="text" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel value="Website (Optional)"/>
                      <TextInput type="text" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel value="Social Links (Optional)"/>
                      <ul className="list-unstyled d-flex align-items-center gap-6 social-icon mb-0">
                        <li>
                            <IconInput icon="/images/svgs/icon-facebook-dark.svg" />
                        </li>
                        <li>
                            <IconInput icon="/images/svgs/icon-twitter-dark.svg" />
                        </li>
                        <li>
                            <IconInput icon="/images/svgs/icon-tiktok-dark.svg" />
                        </li>
                        <li>
                            <IconInput icon="/images/svgs/icon-instagram-dark.svg" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="location-details border-bottom mb-4">
                <SemiHeading title="Location Details"/>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel value="City" isRequired={true}/>
                        <TextInput />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel value="State" isRequired={true}/>
                        <TextInput />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel value="Zip Code" isRequired={true}/>
                        <TextInput />
                    </div>
                  </div>
                </div>
              </div>
              <div className="puppy-details border-bottom mb-4">
                <SemiHeading title="Puppy Details"/>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Puppy Name" isRequired={true}/>
                        <TextInput />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Gender" isRequired={true}/>
                      <select className="form-select shadow-none" aria-label="Default select example">
                        <option >Male</option>
                        <option value="1">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4">
                      <InputLabel value="About (Puppy Profile)" isRequired={true}/>
                      <textarea className="form-control rounded-1" id="About" rows={3} placeholder=""></textarea>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel value="Pattern/Coat " isRequired={true}/>
                      <select className="form-select shadow-none" aria-label="Default select example">
                        <option >Pattern</option>
                        <option value="1">Pattern2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel value="Date of Birth" isRequired={true}/>
                      <input type="text" name="DateBirth" id="DateBirth" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <label  className="form-label d-block">
                        Siblings Of
                      </label>
                      <select className="form-control" id="mySelect2" multiple={false}>
                        <option value="Option1">None</option>
                        <option value="Option2">Max</option>
                        <option value="Option3">Charlie</option>
                        <option value="Option4">Lucy</option>
                        <option value="Option5">Daisy</option>
                        <option value="Option6">Luna</option>
                        <option value="Option7">Bella</option>
                        <option value="Option8">Bailey</option>
                        <option value="Option9">Cooper</option>
                        <option value="Option10">Buddy</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="why-stand-out border-bottom mb-4">
                <SemiHeading title="Why I Stand Out"/>
                <div className="row">
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Health Certificate" value={data.health_certificate} onChange={(value) => setData('health_certificate', value)} />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Vaccinated"
value={data.vaccinated} onChange={(value) => setData('vaccinated', value)}
                                />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Vet Exam"
value={data.vet_exam} onChange={(value) => setData('vet_exam', value)}
                                />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Travel Ready"
value={data.travel_ready} onChange={(value) => setData('travel_ready', value)}
                                />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Delivery Included"
value={data.delivery_included} onChange={(value) => setData('delivery_included', value)}
                                />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Are You a Breeder"
value={data.are_you_a_breeder} onChange={(value) => setData('are_you_a_breeder', value)}
                                />
                  </div>
                </div>
              </div>
              <div className="upload-details">
                <div className="row">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <h6 className="fs-5 mb-3 pb-1">Upload a Image</h6>
                    <FileUpload name="files" required={true} />

                  </div>
                  <div className="col-lg-6">
                    <h6 className="fs-5 mb-3 pb-1">Upload a Video</h6>
                    <FileUpload name="video" required={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary d-flex align-items-center gap-6"><img
              src="../images/svgs/icon-arrow-right.svg" alt="" />Submit Registration</button>
        </form>
  )
}

export default SellerRegistrationForm
