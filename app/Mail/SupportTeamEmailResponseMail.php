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

class SupportTeamEmailResponseMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(protected string $name, protected string $email)
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'We\'ve Received Your Request',
            to: [$this->email],
        );
    }

    /**
     * Get the message content definition.
     */

    public function content(): Content
{
        $get_started_url = route('listing.create');
        $support_email = "support@urpuppy.com";


    $m = (new MailMessage)
        ->greeting("Dear {$this->name},")
        ->line(' Thank you for contacting the **Urpuppy.com Support Team**.')


        ->line('We’ve received your inquiry and one of our representatives will get back to you within the next 24 hours.')

        ->line('In the meantime, feel free to explore our **Help Center** for quick answers to common questions.')

        ->line('Thank you for your patience, and we look forward to assisting you!')

        ->line("If you have any questions or need support, feel free to contact us at [support@urpuppy.com](mailto:{$support_email}).")


        ->line(' Thank you for choosing **Urpuppy.com** to grow your business!');

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
