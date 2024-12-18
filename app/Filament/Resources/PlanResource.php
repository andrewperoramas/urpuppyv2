<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PlanResource\Pages\CreatePlan;
use App\Filament\Resources\PlanResource\Pages\EditPlan;
use App\Filament\Resources\PlanResource\Pages\ListPlans;
use App\Models\Plan;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Pelmered\FilamentMoneyField\Forms\Components\MoneyInput;

class PlanResource extends Resource
{
    protected static ?string $model = Plan::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')->required(),
                MoneyInput::make('price')->decimals(0),
                Select::make('interval')->options([
                    'month' => 'Monthly',
                    'year' => 'Yearly',
                    'quarter' => 'Quarterly',
                ])->default('monthly')->required(),

                Select::make('type')->options([
                    'free' => 'Free',
                    'premium' => 'Premium',
                    'breeder' => 'Breeder',
                ])->default('monthly')->required(),

                TextInput::make('trial_days')->required()->integer(),
                TextInput::make('listing_limit')->integer(),
                TextInput::make('image_per_listing')->required()->integer(),
                TextInput::make('video_per_listing')->required()->integer(),

                Checkbox::make('is_breeder')->default(false),
                Checkbox::make('is_highlight')->default(false),
                Checkbox::make('is_featured')->default(false),
                Checkbox::make('active')->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                TextColumn::make('name')->searchable(),
                TextColumn::make('money_formatted')->searchable(),
                TextColumn::make('order_column', '#')->searchable()->toggleable()->sortable(),
            ])->reorderable('order_column')->defaultSort('order_column')
            ->filters([
                //
            ])
            ->actions([
                EditAction::make(),
            ])
            ->bulkActions([
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
            'index' => ListPlans::route('/'),
            'create' => CreatePlan::route('/create'),
            'edit' => EditPlan::route('/{record}/edit'),
        ];
    }
}
