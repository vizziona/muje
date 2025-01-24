<!-- {!! do_shortcode('[hero-banner style="default" title="' . __('Browse items to Buy') . '" subtitle="' . __('Here is market place to buy and rent many thing you want like cats, houses, plots, different furnitures and many more. Welcome to the best marketplace for you.') . '" enabled_search_box="1" search_type="projects"][/hero-banner]') !!} -->

{!! do_shortcode('[hero-banner style="1"  background_images="buyi.gif"][/hero-banner]') !!}

@php
    Theme::set('navStyle', 'light');
@endphp

{!! Theme::partial('shortcodes.projects-list.index', ['projects' => $projects, 'ajaxUrl' => $ajaxUrl ?? null, 'actionUrl' => $actionUrl ?? null]) !!}
