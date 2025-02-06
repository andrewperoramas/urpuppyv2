<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>{{ config('app.name') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">

    {{ $head ?? '' }}

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: auto;
            padding: 10px;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
        }
        .card {
            width: 280px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 12px;
            text-align: left;
            margin: 0 auto; /* Centering the card */
        }
        .card img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 10px;
            display: block;
            margin: 0 auto;
        }
        .title {
            font-size: 1.125rem;
            color: #08314E;
            margin-top: 8px;
            text-align: left;
        }
        .subtitle {
            font-size: 1rem;
            color: rgba(8, 49, 79, 0.8);
            font-weight: 400;
            text-align: left;
            margin-bottom: 8px;
        }
        .info-row {
            font-size: 0.855rem;
            display: flex;
            font-weight: 400;
            justify-content: space-between;
            margin-top: 4px;
        }
        .info-row span {
 #           flex: 1;
            text-align: left;
            color: rgba(8, 49, 79, 0.8);
            display: flex;
            align-items: center; /* Align icons and text vertically */
        }
        .info-row img {

            width: 16px; /* Resize icons */
            height: 16px;
            margin-right: 4px; /* Add spacing between icon and text */
            vertical-align: middle; /* Align icons with text */
        }
        .separator {
            border-top: 1px solid #ddd;
            margin: 10px 0;
        }
        .price-button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
        }
        .price {
            font-size: 1.25rem !important;
            font-weight: 500;
            color: #08314E;
        }
        .btn {
            display: inline-block;
            background-color: #E88325;
            border-radius: 99px;
            color: white;
            padding: 9px 24px;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            text-align: center;
        }
    </style>
</head>
<body>

<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #051F31; padding: 40px 0;">
    <tr>
        <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: white; margin: 0 auto; position: relative;">

                {{ $header ?? '' }}

                <!-- Email Body -->
                <tr>
                    <td width="100%" cellpadding="20" cellspacing="20">
                        <table cellpadding="0" cellspacing="0" role="presentation" width="100%">

                            <h2 style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 24px; font-weight: 500; line-height: 140%; color: #08314E; margin: 0 auto; max-width: 75%; padding-top: 20px; text-align: center;">
                                You might like these puppies
                            </h2>

                            @foreach($items as $item)
                            <tr>
                                <td style="padding-top: 20px; padding-bottom:20px" align="center"> <!-- Center the card inside this TD -->
                                    <div class="card">
                                        <img src="{{ $item->image }}" alt="Puppy Image">
                                        <div class="subtitle">{{ $item->breeds->first()->name }}</div>
                                        <div class="title">{{ $item->name }}</div>

                                        <div class="info-row">
                                            <span>
                                                <img src="https://urpuppy.com/images/svgs/icon-map-pin.svg" alt="Location Icon" />
                                                {{ $item->seller->address }}
                                            </span>
                                            <span>
                                                <img src="https://urpuppy.com/images/svgs/icon-calendar.svg" alt="Birthdate Icon" />
                                                {{ $item->age }}
                                            </span>
                                        </div>


                                        <div class="info-row">
                                            <span>
                                                <img src="https://urpuppy.com/images/svgs/icon-female.svg" alt="Location Icon" />
                                                {{ $item->gender }}
                                            </span>
                                            <span>
                                                <img src="https://urpuppy.com/images/svgs/icon-eye.svg" alt="Birthdate Icon" />
                                                {{ $item->view_count }}
                                            </span>
                                        </div>


                                        <hr class="separator">

                                        <div class="price-button">
                                            <div class="price">{{ $item->formatted_price }}</div>
                                            <a href="https://urpuppy.com/puppies/{{ $item->slug }}" class="btn">View</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </table>
                    </td>
                </tr>

                {{ $footer ?? '' }}

            </table>
        </td>
    </tr>
</table>

</body>
</html>
