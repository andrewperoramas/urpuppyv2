import PrimaryButton from '@/Components/PrimaryButton';
import Button from '@/Components/ui/Button';
import GuestLayout from '@/Layouts/GuestLayout';
import Layout from '@/Layouts/Layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status, puppy }: { status?: string, puppy: App.Data.PuppyCardData }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post('/email/verification-notification');
    };

    return (
        <GuestLayout header="Email Verification" puppy={puppy}>

            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 d-flex justify-content-between">
                    <Button type="button" href="" >
                        Resend Verification Email
                    </Button>

                    <Link
                        href={"/logout"}
                        method="post"
                        as="button"
                        className="btn btn-secondary"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
