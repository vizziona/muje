<?php

namespace Botble\Faq;

use Botble\Base\Facades\BaseHelper;
use Botble\Base\Facades\MetaBox;
use Botble\Base\Models\BaseModel;
use Botble\Faq\Contracts\Faq as FaqContract;
use Botble\Theme\Facades\Theme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Throwable;

class FaqSupport implements FaqContract
{
    public function registerSchema(FaqCollection $faqs): void
    {
        $schema = [
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => [],
        ];

        foreach ($faqs->toArray() as $faq) {
            $schema['mainEntity'][] = [
                '@type' => 'Question',
                'name' => $faq->getQuestion(),
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => $faq->getAnswer(),
                ],
            ];
        }

        $schema = json_encode($schema);

        Theme::asset()
            ->container('header')
            ->writeScript('faq-schema', $schema, attributes: ['type' => 'application/ld+json']);
    }

    public function saveConfigs(BaseModel|Model $model, string|array|null $data): void
    {
        try {
            $config = $data;

            if (Str::isJson($config)) {
                $config = json_decode($config, true);
            }

            if (! empty($config) && is_array($config)) {
                foreach ($config as $key => $item) {
                    if (! $item[0]['value'] && ! $item[1]['value']) {
                        Arr::forget($config, $key);
                    }
                }
            }

            if (empty($config)) {
                MetaBox::deleteMetaData($model, 'faq_schema_config');
            } else {
                MetaBox::saveMetaBoxData($model, 'faq_schema_config', $config);
            }
        } catch (Throwable $exception) {
            BaseHelper::logError($exception);
        }
    }
}
