<?php

namespace App\Filament\Resources;

use App\Filament\Exports\BreedExporter;
use App\Filament\Imports\BreedImporter;
use App\Filament\Resources\BreedResource\Pages\CreateBreed;
use App\Filament\Resources\BreedResource\Pages\EditBreed;
use App\Filament\Resources\BreedResource\Pages\ListBreeds;
use App\Models\Breed;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\ExportBulkAction;
use Filament\Tables\Actions\ImportAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BreedResource extends Resource
{
    protected static ?string $model = Breed::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form->schema([Section::make()
            ->columns([
                8,

            ])->schema([
                TextInput::make('name'),
                TextInput::make('slug')->nullable()->unique(),
                Textarea::make('description'),
                RichEditor::make('history_description'),
                RichEditor::make('size_description'),
                RichEditor::make('coat_description'),
                RichEditor::make('temperament_description'),
                RichEditor::make('lifestyle_description'),
                RichEditor::make('activities_description'),
                RichEditor::make('content'),
                SpatieMediaLibraryFileUpload::make('image')
                    ->collection('breeds'),
            ])]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('created_at', 'desc')
            ->headerActions([
                ImportAction::make()
                    ->importer(BreedImporter::class),
            ])
            ->columns([
                TextColumn::make('name')->searchable(),
            ])
            ->filters([

            ])
            ->actions([
                EditAction::make(),

            ])
            ->bulkActions([
                ExportBulkAction::make()
                    ->exporter(BreedExporter::class),
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListBreeds::route('/'),
            'create' => CreateBreed::route('/create'),
            'edit' => EditBreed::route('/{record}/edit'),
        ];
    }
}
