import React from 'react'
import TextInput from '../TextInput'
import InputLabel from '../InputLabel'
import IconInput from '../IconInput'
import SemiHeading from '../SemiHeading'
import YesOrNoRadioInput from '../YesOrNoRadioInput'
import { useForm, usePage } from '@inertiajs/react'
import Dropzone from 'react-dropzone'
import FileUpload from '../FileUpload'
import DateInput from '../DateInput'
import StateCityDropdown from '../StateCityDropdown'
import SelectInput, { Option } from '../SelectInput'



const SellerRegistrationForm = () => {

    const patterns = usePage().props.patterns as App.Data.PatternData[];
    const colors = usePage().props.colors as App.Data.ColorData[];
    const siblings = usePage().props.siblings as App.Data.SiblingData[];
    const breeds = usePage().props.breeds as App.Data.BreedOptionData[];
    const puppy_count = usePage().props.puppy_count as number;
    const user = usePage().props.auth.user;


   const { data, setData, post } = useForm({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        website: null,
        phone: '',
        images: [],
        videos: [],
        has_vaccine: 'no',
        has_health_certificate: 'no',
        has_vet_exam: 'no',
        are_you_a_breeder: 'no',
        has_delivery_included: 'no',
        has_travel_ready: 'no',
        puppy_price: '',
        social_fb: null,
        social_ig: null,
        social_tiktok: null,
        social_x: null,
        zip_code: '',
        puppy_name: '',
        puppy_gender: 'Male',
        puppy_about: '',
        puppy_patterns: [],
        puppy_colors: [],
        puppy_birth_date: '',
        puppy_siblings: [],
        image_upload: [],
   })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);

    // const updatedData = {
    //     ...Object.fromEntries(formData.entries()),
    //     image_upload: formData.getAll('files')
    // };

//     setData((previous: any) => ({
//         ...previous,
//         ...updatedData,
//     }));

    post('/seller/store');
};




  return (
          <form onSubmit={handleSubmit}>
          <div className="card border">
            <div className="card-body">

                    {  !puppy_count &&
                    <>
              <div className="contact-details border-bottom mb-4">
                <h6 className="fs-5 mb-3 pb-1">Contact Details</h6>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-4">
                     <InputLabel isRequired={true} value="First Name "/>
                     <TextInput  value={data.first_name}/>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel isRequired={true} value="Last Name"/>
                     <TextInput  value={data.last_name}/>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel isRequired={true} value="Email"/>
                     <TextInput  value={data.email}/>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel isRequired={true} value="Phone"/>
                      <TextInput type="text" onChange={(e: any) => setData('phone', e.target.value)} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel value="Website (Optional)"/>
                      <TextInput type="text" onChange={(e: any) => setData('website', e.target.value)}  />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <InputLabel value="Social Links (Optional)"/>
                      <ul className="list-unstyled d-flex align-items-center gap-6 social-icon mb-0">
                        <li>
                            <IconInput onChange={(e: any) => setData('social_fb', e.target.value)} icon="/images/svgs/icon-facebook-dark.svg" />
                        </li>
                        <li>
                            <IconInput onChange={(e: any) => setData('social_x', e.target.value)} icon="/images/svgs/icon-twitter-dark.svg" />
                        </li>
                        <li>
                            <IconInput onChange={(e: any) => setData('social_tiktok', e.target.value)} icon="/images/svgs/icon-tiktok-dark.svg" />
                        </li>
                        <li>
                            <IconInput onChange={(e: any) => setData('social_ig', e.target.value)} icon="/images/svgs/icon-instagram-dark.svg" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="location-details border-bottom mb-4">
                <SemiHeading title="Location Details"/>
                <StateCityDropdown setFormData={setData}/>
              </div>
                    </> }
              <div className="puppy-details border-bottom mb-4">
                <SemiHeading title="Puppy Details"/>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Puppy Name" isRequired={true}/>
                        <TextInput onChange={(e) => setData('puppy_name', e.target.value)} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Puppy Price" isRequired={true}/>
                        <TextInput onChange={(e) => setData('puppy_price', e.target.value)} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Gender" isRequired={true}/>
                      <select onChange={(e) => setData('puppy_gender', e.target.value)} className="form-select shadow-none" aria-label="Default select example">
                        <option value="Male" >Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Date of Birth" isRequired={true}/>
                      <DateInput name="puppy_birth_date" setData={setData} value={data.puppy_birth_date}  />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4">
                      <InputLabel value="About (Puppy Profile)" isRequired={true}/>
                      <textarea onChange={(e) => setData('puppy_about', e.target.value)} className="form-control rounded-1" id="About" rows={3} placeholder=""></textarea>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Breeds" isRequired={true}/>
                      <SelectInput setData={setData} multiple={true} name="puppy_breeds" options={breeds} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Pattern/Coat " isRequired={true}/>
                      <SelectInput setData={setData} multiple={true} name="puppy_patterns" options={patterns} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <InputLabel value="Color" isRequired={true}/>
                      <SelectInput setData={setData} multiple={true} name="puppy_colors" options={colors} />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label  className="form-label d-block">
                        Siblings Of
                      </label>
                     <SelectInput setData={setData} multiple={true} name="puppy_siblings" options={siblings} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="why-stand-out border-bottom mb-4">
                <SemiHeading title="Why I Stand Out"/>
                <div className="row">
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Health Certificate" value={data.has_health_certificate} name="has_health_certificate" setData={setData}  />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Vaccinated"
value={data.has_vaccine} name="has_vaccine" setData={setData}
                                />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Vet Exam"
value={data.has_vet_exam} name="has_vet_exam" setData={setData}
                                />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Travel Ready"
value={data.has_travel_ready} name="has_travel_ready" setData={setData}
                                />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Delivery Included"
                                    name="has_delivery_included"
value={data.has_delivery_included} setData={setData}
                                />
                  </div>
                  <div className="col-md-6 col-lg-4 col-xxl">
                    <YesOrNoRadioInput title="Are You a Breeder"
                           name="are_you_a_breeder"
value={data.are_you_a_breeder}  setData={setData}
                                />
                  </div>
                </div>
              </div>
              <div className="upload-details">
                <div className="row">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <h6 className="fs-5 mb-3 pb-1">Upload a Image</h6>
                    <FileUpload
                             setData={(name, files: any) => setData('images', files)}
                                    name="images" required={true} />

                  </div>
                  <div className="col-lg-6">
                    <h6 className="fs-5 mb-3 pb-1">Upload a Video</h6>
                    <FileUpload
                                    name="videos"
                             setData={(name, files: any) => setData('videos', files)}
                                     required={true} />
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
