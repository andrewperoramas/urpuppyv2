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

class BreederAccountRejected extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(protected $user, protected $reason)
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Your breeder account has been rejected',
            to: [$this->user->email],
        );
    }

    /**
     * Get the message content definition.
     */

    public function content(): Content
{
        $url = route('plans.breeder');
    $m = (new MailMessage)
        ->greeting("Hi {$this->user->full_name},")

        ->line('')
        ->line('Your breeder account has been rejected.')
        ->line($this->reason)
        /* ->line("[Go to plan]({$url})") */
        ->line('Thank you for being a part of the Urpuppy community!');

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
