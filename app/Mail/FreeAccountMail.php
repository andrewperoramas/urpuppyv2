<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\HtmlString;

class FreeAccountMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(protected $user)
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Welcome to Urpuppy.com – Start Your Free 3-Day Trial!',
            to: [$this->user->email],
        );
    }

    /**
     * Get the message content definition.
     */

    public function content(): Content
{
        $plan_url = route('plans.index');
        $support_email = "support@urpuppy.com";


          $listItems = [
            'You can cancel or renew your subscription at any time.',
            'If you choose to cancel prior to your expiration date, your subscription will remain active until the end of the current subscription period.'
    ];

    $listHtml = '<ul style="list-style-type: disc; padding-left: 20px;">';
    foreach ($listItems as $item) {
        $listHtml .= "<li>{$item}</li>";
    }
    $listHtml .= '</ul>';


    $m = (new MailMessage)
        ->greeting("Dear {$this->user->full_name}")
        ->line('Thank you for registering for a free **Urpuppy.com** account! We’re excited to have you on board.')

        ->line("For the next 3 days, you’ll have the ability to post and explore our platform. However, please note that your account will have limited features during the trial period.")

        ->line("To unlock the full potential of Urpuppy.com and enjoy endless features, including [highlight key premium features, e.g., “unlimited postings, advanced search options, and priority support”], we encourage you to upgrade within the next 3 days.")

        ->line("[Upgrade Now and Unlock More!]({$plan_url})")

        ->line("If you have any questions or need support, feel free to contact us at [support@urpuppy.com](mailto:{$support_email}).")

        ->line(' Thank you for choosing **Urpuppy.com** – we’re here to help you connect and succeed!');

    return new Content(htmlString: $m->render());
}

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
