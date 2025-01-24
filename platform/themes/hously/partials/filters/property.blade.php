<form action="{{ $actionUrl ?? RealEstateHelper::getPropertiesListPageUrl() }}" data-ajax-url="{{ $ajaxUrl ?? route('public.properties') }}">
    <input type="hidden" name="type" value="{{ $type }}">
    <div class="space-y-5 registration-form text-dark text-start">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-0">
            {!! Theme::partial('filters.by-project', compact('type')) !!}

            {!! Theme::partial('filters.location', compact('type')) !!}

            {!! Theme::partial('filters.keyword', compact('type')) !!}
        </div>
        
        <button type="submit" class="btn bg-primary hover:bg-secondary border-primary hover:border-secondary text-white submit-btn w-full md:w-1/4 !h-12 rounded transition-all ease-in-out duration-200">
            <i class="mdi mdi-magnify me-2"></i>
            {{ __('Search') }}
        </button>
    </div>
</form>
