import React from 'react'
import TextInput from '../TextInput'
import InputLabel from '../InputLabel'
import IconInput from '../IconInput'
import SemiHeading from '../SemiHeading'
import YesOrNoRadioInput from '../YesOrNoRadioInput'
import { useForm } from '@inertiajs/react'
import Dropzone from 'react-dropzone'
import FileUpload from '../FileUpload'

const BreederRegistrationForm = () => {

   const { data, setData, post } = useForm({
    health_certificate: 'yes',
    vaccinated: 'yes',
    vet_exam: 'yes',
    travel_ready: 'yes',
    delivery_included: 'yes',
    are_you_a_breeder: 'yes',
    images: [],
    videos: []
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
                  <div className="col-lg-12">
                    <div className="mb-4">
                     <InputLabel isRequired={true} value="Full Name"/>
                     <TextInput />
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-details border-bottom mb-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                     <InputLabel isRequired={true} value="Kennel Name"/>
                     <TextInput />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-4">
                     <InputLabel isRequired={true} value="Email"/>
                     <TextInput />
                    </div>
                  </div>
                </div>
              </div>


              <div className="contact-details border-bottom mb-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                     <InputLabel isRequired={true} value="Phone"/>
                     <TextInput />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Social Links (Optional)"/>
                      <ul className="list-unstyled d-flex align-items-center gap-6 social-icon mb-0">
                        <li>
                            <IconInput onChange={() => {}} icon="/images/svgs/icon-facebook-dark.svg" />
                        </li>
                        <li>
                            <IconInput  onChange={() => {}} icon="/images/svgs/icon-twitter-dark.svg" />
                        </li>
                        <li>
                            <IconInput  onChange={() => {}} icon="/images/svgs/icon-tiktok-dark.svg" />
                        </li>
                        <li>
                            <IconInput  onChange={() => {}} icon="/images/svgs/icon-instagram-dark.svg" />
                        </li>
                        <li>
                            <IconInput  onChange={() => {}} icon="/images/svgs/icon-globe-dark.svg" />
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

              <div className="location-details border-bottom mb-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-6">
                      <InputLabel value={
                                        <span>Bree Type <span className="fs-1"> ( Max 4 Type ) </span></span>

                                    } isRequired={true}/>
                        <TextInput />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="When did you start your business?" isRequired={true}/>
                        <TextInput />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-4">
                      <InputLabel value="About Us" isRequired={true}/>
                        <TextInput />
                    </div>
                  </div>
                </div>
              </div>
              <div className="why-stand-out border-bottom mb-4">
                <div className="row">
                  <div className="col-md-6 col-lg-4 col-xxl">
                  </div>
                </div>
              </div>
              <div className="upload-details">
                <div className="row">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <h6 className="fs-5 mb-3 pb-1">Upload a Image (Max - 7)</h6>


                    <FileUpload
                     setData={(name, files: any) => setData('images', files)}
                    name="files" required={true} />


                  </div>
                  <div className="col-lg-6">
                    <h6 className="fs-5 mb-3 pb-1">Upload a Video (Max - 1)</h6>
                    <FileUpload
                             setData={(name, files: any) => setData('videos', files)}
                                    name="video" required={true} />
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

export default BreederRegistrationForm
