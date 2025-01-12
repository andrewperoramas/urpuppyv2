import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Button from '@/Components/ui/Button';
import GuestLayout from '@/Layouts/GuestLayout';
import Layout from '@/Layouts/Layout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Layout navType="secondary" >
              <div className="page-wrapper position-relative overflow-hidden">

    <section className="information pt-4 pb-8 pb-lg-9">
                  <div className="container">

            <Head title="Forgot Password" />



            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="col-4">
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="mt-4 flex items-center justify-end">
                    <Button type="button" href="#" className="ms-4" >
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
            </div>

                          </section>
                          </div>
        </Layout>
    );
}
