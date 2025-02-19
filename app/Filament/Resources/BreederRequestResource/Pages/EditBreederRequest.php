<?php

namespace App\Filament\Resources\BreederRequestResource\Pages;

use App\Filament\Resources\BreederRequestResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBreederRequest extends EditRecord
{
    protected static string $resource = BreederRequestResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
