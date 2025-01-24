<!-- {!! do_shortcode('[hero-banner style="default" title="' . __('Browse items to Rent') . '" subtitle="' . __('Here is Market place to rent different properties you wish include cars, houses, plots, furnitures and many  more services. You are safe to browse more') . '" enabled_search_box="1" search_type="properties"][/hero-banner]') !!} -->

{!! do_shortcode('[hero-banner style="2" title="Browse and Search Favourite Properties To Rent"  background_images="hotel.webp"][/hero-banner]') !!}
@php
    Theme::set('navStyle', 'light');
@endphp

{!! Theme::partial('shortcodes.properties-list.index', ['properties' => $properties, 'ajaxUrl' => $ajaxUrl ?? null, 'actionUrl' => $actionUrl ?? null]) !!}
