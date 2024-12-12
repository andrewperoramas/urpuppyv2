<?php

namespace App\Filament\Imports;

use App\Models\Breed;
use Filament\Actions\Imports\ImportColumn;
use Filament\Actions\Imports\Importer;
use Filament\Actions\Imports\Models\Import;

class BreedImporter extends Importer
{
    protected static ?string $model = Breed::class;

    public static function getColumns(): array
    {
        return [
            ImportColumn::make('name')
                ->requiredMapping()
                ->rules(['required', 'max:255']),
            ImportColumn::make('content'),
            ImportColumn::make('history_description'),
            ImportColumn::make('size_description'),
            ImportColumn::make('coat_description'),
            ImportColumn::make('temperament_description'),
            ImportColumn::make('lifestyle_description'),
            ImportColumn::make('activities_description'),

        ];
    }

    public static function getCompletedNotificationBody(Import $import): string
    {
        $body = 'Your breed import has completed and ' . number_format($import->successful_rows) . ' ' . str('row')->plural($import->successful_rows) . ' imported.';

        if ($failedRowsCount = $import->getFailedRowsCount()) {
            $body .= ' ' . number_format($failedRowsCount) . ' ' . str('row')->plural($failedRowsCount) . ' failed to import.';
        }

        return $body;
    }

    public function resolveRecord(): ?Breed
    {
        // return Breed::firstOrNew([
        //     // Update existing records, matching them by `$this->data['column_name']`
        //     'email' => $this->data['email'],
        // ]);

        return new Breed;
    }
}
